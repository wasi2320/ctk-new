"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CONTACT_SECTION_DATA } from "@/utils/data/contactSection";
import BookCall from "@/app/components/sections/BookCall";
import TrustBadge from "@/app/components/sections/TrustBadge";

const TOPICS = [
  "Kubernetes / EKS",
  "DevOps & CI/CD",
  "Cloud cost (FinOps)",
  "Cloud migration",
  "Security & compliance",
  "Other",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const formCardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const contactInfoVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
  loading: {
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export default function ContactUsSection() {
  const { title, backgroundImage, formFields, submitButton, contactInfo, socialMedia } =
    CONTACT_SECTION_DATA;

  const router = useRouter();
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Submit the lead to the secure server-side endpoint (HubSpot + backup),
  // then send the visitor to the /thank-you confirmation page.
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name || "",
          email: formData.email || "",
          company: formData.company || "",
          topic: formData.topic || "",
          message: formData.message || "",
          pageUri:
            typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setSubmitStatus("success");
      setFormData({});
      router.push("/thank-you");
    } catch (error) {
      console.error("Lead submission error:", error);
      setSubmitStatus("error");
      alert(
        "❌ Something went wrong sending your message. Please try again or email info@codetokloud.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      className="w-full py-12 px-2 md:px-0 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
        {/* Form Card */}
        <motion.div
          className="bg-white/95 rounded-2xl shadow-xl p-8 flex-1 min-w-[320px] max-w-xl mx-auto"
          variants={formCardVariants}
          whileHover={{
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <motion.h2
            className="text-4xl font-semibold mb-4"
            variants={formFieldVariants}
          >
            {title}
          </motion.h2>
          <motion.div variants={formFieldVariants} className="mb-8">
            <TrustBadge align="start" />
          </motion.div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {formFields.map((field, index) => (
              <motion.div
                key={field.id}
                variants={formFieldVariants}
                transition={{ delay: index * 0.1 }}
              >
                <motion.label
                  className="block text-lg font-medium mb-1"
                  whileHover={{ color: "#0972d3" }}
                >
                  {field.label}
                </motion.label>
                {field.type === "textarea" ? (
                  <motion.textarea
                    className="w-full border-b border-gray-400 outline-none py-2 bg-transparent transition-colors focus:border-[#0972d3]"
                    rows={field.rows}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.id] || ""}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    whileFocus={{ borderColor: "#0972d3" }}
                  />
                ) : (
                  <motion.input
                    type={field.type}
                    className="w-full border-b border-gray-400 outline-none py-2 bg-transparent transition-colors focus:border-[#0972d3]"
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.id] || ""}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    whileFocus={{ borderColor: "#0972d3" }}
                  />
                )}
              </motion.div>
            ))}

            {/* Qualifier, helps route and prioritize the lead. */}
            <motion.div variants={formFieldVariants}>
              <motion.label
                className="block text-lg font-medium mb-1"
                whileHover={{ color: "#0972d3" }}
              >
                What do you need help with?
              </motion.label>
              <select
                className="w-full border-b border-gray-400 outline-none py-2 bg-transparent transition-colors focus:border-[#0972d3]"
                value={formData.topic || ""}
                onChange={(e) => handleInputChange("topic", e.target.value)}
              >
                <option value="">Select a topic (optional)</option>
                {TOPICS.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div
              className="flex justify-end mt-4"
              variants={formFieldVariants}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`${submitButton.className} ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                } ${
                  submitStatus === "success"
                    ? "bg-[#0972d3] hover:bg-[#0b5cad]"
                    : submitStatus === "error"
                    ? "bg-red-600 hover:bg-red-700"
                    : ""
                }`}
                variants={buttonVariants}
                initial="idle"
                whileHover={isSubmitting ? undefined : "hover"}
                whileTap={isSubmitting ? undefined : "tap"}
                animate={isSubmitting ? "loading" : "idle"}
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
                ) : submitStatus === "error" ? (
                  "❌ Failed"
                ) : (
                  submitButton.text
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex-1 flex flex-col items-start mt-8 md:mt-0 md:pl-8 border-l border-black"
          variants={contactInfoVariants}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.id}
              className="mb-6"
              variants={formFieldVariants}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="font-semibold text-2xl mb-1"
                whileHover={{ color: "#0972d3" }}
              >
                {info.title}
              </motion.div>
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
                  <motion.a
                    key={index}
                    href={info.href}
                    className={info.className}
                    whileHover={{ scale: 1.05, color: "#0972d3" }}
                  >
                    {item}
                  </motion.a>
                ))
              )}
            </motion.div>
          ))}

          {/* Book a call, appears once NEXT_PUBLIC_CALENDLY_URL is set. */}
          <motion.div variants={formFieldVariants} className="mb-6">
            <BookCall label="Or book a call →" />
          </motion.div>

          <motion.div variants={formFieldVariants}>
            <motion.div
              className="font-semibold text-2xl mb-2"
              whileHover={{ color: "#0972d3" }}
            >
              {socialMedia.title}
            </motion.div>
            <div className="flex gap-4">
              {socialMedia.links.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  aria-label={social.ariaLabel}
                  target="_blank"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={38}
                    height={38}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
