import { getContactSocialLinks } from "./socialMedia";

export const CONTACT_SECTION_DATA = {
  title: "Get in Touch",
  backgroundImage: "/Images/ConactUs.svg",

  formFields: [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Your Name",
      required: true,
    },
    {
      id: "company",
      label: "Company Name",
      type: "text",
      placeholder: "Your Company",
      required: false,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Your Email",
      required: true,
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Your Message",
      required: true,
      rows: 2,
    },
  ],

  uploadSection: {
    icon: "/Images/upload-icon.png",
    text: "Upload file",
    altText: "Upload",
  },

  submitButton: {
    text: "Send Message",
    className:
      "bg-[#000] text-white px-7 py-2 rounded-full shadow hover:bg-[#193728]/90 transition-colors cursor-pointer",
  },

  contactInfo: [
    {
      id: "location",
      title: "Location:",
      content: [
        "432 Cherry DR, Troy, Michigan",
        "48083 United States ((248) 823-3200 )",
      ],
      type: "text",
    },
    {
      id: "email",
      title: "Email:",
      content: ["C2K@gmail.com"],
      type: "link",
      href: "mailto:C2K@gmail.com",
      className: "text-[#193728] underline text-sm",
    },
    {
      id: "phone",
      title: "Phone Number:",
      content: ["+736383838912"],
      type: "link",
      href: "tel:+736383838912",
      className: "text-[#193728] text-sm",
    },
  ],

  socialMedia: {
    title: "Follow us at:",
    links: getContactSocialLinks(),
  },
};
