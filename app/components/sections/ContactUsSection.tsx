"use client";
import Image from "next/image";
import { useState } from "react";
import { CONTACT_SECTION_DATA } from "@/utils/data/contactSection";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Type definitions
interface UploadedFileInfo {
  name: string;
  size: number;
  type: string;
}

interface SubmissionData {
  formData: { [key: string]: string };
  uploadedFile: UploadedFileInfo | null;
  fileUrl: string | null;
  submittedAt: string;
}

interface DiscordEmbedField {
  name: string;
  value: string;
  inline: boolean;
}

interface DiscordEmbed {
  title: string;
  description: string;
  color: number;
  fields: DiscordEmbedField[];
  footer: {
    text: string;
    icon_url: string;
  };
  timestamp: string;
}

interface DiscordPayload {
  embeds: DiscordEmbed[];
}

export default function ContactUsSection() {
  const {
    title,
    backgroundImage,
    formFields,
    uploadSection,
    submitButton,
    contactInfo,
    socialMedia,
  } = CONTACT_SECTION_DATA;

  // S3 Configuration
  const s3Client = new S3Client({
    region: process.env.NEXT_PUBLIC_AWS_REGION || "us-east-1",
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
    },
  });

  // State to manage form data
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Handle input changes
  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  // Upload file to S3
  const uploadFileToS3 = async (file: File): Promise<string> => {
    try {
      // Add timestamp and random string to filename to avoid conflicts
      const timestamp = Date.now();
      const randomStr = Math.random().toString(36).substring(7);
      const fileName = `contact-uploads/${timestamp}-${randomStr}-${file.name}`;

      // Convert file to ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();
      const fileContent = new Uint8Array(arrayBuffer);

      const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;

      if (!bucketName) {
        throw new Error("S3 bucket name not configured");
      }

      // Create S3 upload command
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: fileName,
        Body: fileContent,
        ContentType: file.type,
        ContentDisposition: "inline",
      });

      // Upload to S3
      await s3Client.send(command);

      // Return the public URL
      const region = process.env.NEXT_PUBLIC_AWS_REGION || "us-east-1";
      const fileUrl = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;

      return fileUrl;
    } catch (error) {
      console.error("Error uploading to S3:", error);
      throw error;
    }
  };

  // Format data for Discord
  const formatDiscordMessage = (submissionData: SubmissionData) => {
    const timestamp = new Date().toLocaleString();

    // Create embed fields for form data
    const fields = Object.entries(submissionData.formData).map(
      ([key, value]) => {
        const field = formFields.find((f) => f.id === key);
        return {
          name: field?.label || key,
          value: value || "Not provided",
          inline: true,
        };
      }
    );

    // Add file information if uploaded with S3 URL
    if (submissionData.uploadedFile) {
      fields.push({
        name: "📎 Uploaded File",
        value: submissionData.fileUrl
          ? `[${submissionData.uploadedFile.name}](${
              submissionData.fileUrl
            })\nSize: ${(submissionData.uploadedFile.size / 1024).toFixed(
              2
            )} KB\nType: ${submissionData.uploadedFile.type}`
          : `${submissionData.uploadedFile.name} (${(
              submissionData.uploadedFile.size / 1024
            ).toFixed(2)} KB) - Upload failed`,
        inline: false,
      });
    }

    // Add submission timestamp
    fields.push({
      name: "🕒 Submission Time",
      value: timestamp,
      inline: true,
    });

    return {
      embeds: [
        {
          title: "🎯 New Contact Form Submission",
          description:
            "A new contact form has been submitted with the following details:",
          color: 0x00ff00, // Green color
          fields: fields,
          footer: {
            text: "Contact Form Submission System",
            icon_url: "https://cdn-icons-png.flaticon.com/512/684/684910.png",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };
  };

  // Send to Discord
  const sendToDiscord = async (discordPayload: DiscordPayload) => {
    const webhookUrl =
      process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL ||
      "https://discord.com/api/webhooks/1382850558288855200/FdgEKZeNdokxtBgahKci9FS70F_AS3lObDBZEaA0ruun7H98PxK-_oGKjFQs65KvQnU4";

    if (!webhookUrl) {
      throw new Error("Webhook URL not configured");
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordPayload),
    });

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status}`);
    }
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      let fileUrl = null;

      // Upload file to S3 if present
      if (uploadedFile) {
        try {
          fileUrl = await uploadFileToS3(uploadedFile);
        } catch (uploadError) {
          console.error("Error uploading file to S3:", uploadError);
          // Continue with submission even if file upload fails
        }
      }

      // Create the data object
      const submissionData: SubmissionData = {
        formData,
        uploadedFile: uploadedFile
          ? {
              name: uploadedFile.name,
              size: uploadedFile.size,
              type: uploadedFile.type,
            }
          : null,
        fileUrl: fileUrl,
        submittedAt: new Date().toLocaleString(),
      };

      // Format for Discord
      const discordPayload = formatDiscordMessage(submissionData);

      // Send to Discord
      await sendToDiscord(discordPayload);

      setSubmitStatus("success");

      // Reset form
      setFormData({});
      setUploadedFile(null);

      // Show success message
      alert(
        "✅ Your message has been sent successfully to our mail channel!" +
          (fileUrl
            ? " File has been uploaded."
            : uploadedFile
            ? " Note: File upload failed, but form was submitted."
            : "")
      );
    } catch (error) {
      console.error("Error sending to Discord:", error);
      setSubmitStatus("error");
      alert(
        "❌ Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full py-12 px-2 md:px-0 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* <FluidBackground className="absolute inset-0" /> */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
        {/* Form Card */}
        <div className="bg-white/95 rounded-2xl shadow-xl p-8 flex-1 min-w-[320px] max-w-xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8">{title}</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <div key={field.id}>
                <label className="block text-lg font-medium mb-1">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    className="w-full border-b border-gray-400 outline-none py-2 bg-transparent"
                    rows={field.rows}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.id] || ""}
                    onChange={(e) =>
                      handleInputChange(field.id, e.target.value)
                    }
                  />
                ) : (
                  <input
                    type={field.type}
                    className="w-full border-b border-gray-400 outline-none py-2 bg-transparent"
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.id] || ""}
                    onChange={(e) =>
                      handleInputChange(field.id, e.target.value)
                    }
                  />
                )}
              </div>
            ))}

            <div className="flex items-center gap-2 mt-2">
              <Image
                src={uploadSection.icon}
                alt={uploadSection.altText}
                width={18}
                height={18}
              />
              <label className="text-gray-700 text-base cursor-pointer">
                {uploadSection.text}
                {uploadedFile ? ` - ${uploadedFile.name}` : ""}
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </div>

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${submitButton.className} ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                } ${
                  submitStatus === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : submitStatus === "error"
                    ? "bg-red-600 hover:bg-red-700"
                    : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : submitStatus === "success" ? (
                  "✅ Sent!"
                ) : submitStatus === "error" ? (
                  "❌ Failed"
                ) : (
                  submitButton.text
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col items-start mt-8 md:mt-0 md:pl-8 border-l border-black">
          {contactInfo.map((info) => (
            <div key={info.id} className="mb-6">
              <div className="font-semibold text-2xl mb-1">{info.title}</div>
              {info.type === "text" ? (
                <div className="text-gray-800 text-xl">
                  {info.content.map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < info.content.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              ) : (
                info.content.map((item, index) => (
                  <a key={index} href={info.href} className={info.className}>
                    {item}
                  </a>
                ))
              )}
            </div>
          ))}

          <div>
            <div className="font-semibold text-2xl mb-2">
              {socialMedia.title}
            </div>
            <div className="flex gap-4">
              {socialMedia.links.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  aria-label={social.ariaLabel}
                  target="_blank"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={38}
                    height={38}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
