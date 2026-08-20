import { getContactSocialLinks } from "./socialMedia";

export const CONTACT_SECTION_DATA = {
  title: "Get in Touch",
  backgroundImage: "/Images/ConactUs.webp",

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
      placeholder: "Tell us about your project (optional)",
      required: false,
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
      "bg-[#000] text-white px-7 py-2 rounded-full shadow hover:bg-[#16324f]/90 transition-colors cursor-pointer",
  },

  contactInfo: [
    {
      id: "location",
      title: "Location:",
      content: ["CodetoKloud Inc PO Box 9165 ", "Naperville, IL 60567"],
      type: "text",
    },
    {
      id: "email",
      title: "Email:",
      content: ["info@codetokloud.com"],
      type: "link",
      href: "mailto:info@codetokloud.com",
      className: "text-[#16324f] underline text-xl",
    },
    {
      id: "phone",
      title: "Phone Number:",
      content: ["+1 (309) 590-3617"],
      type: "link",
      href: "tel:+13095903617",
      className: "text-[#16324f] text-xl",
    },
  ],

  socialMedia: {
    title: "Follow us at:",
    links: getContactSocialLinks(),
  },
};
