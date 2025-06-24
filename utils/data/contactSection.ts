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
      content: ["Codetokloud Inc PO Box 9165 ", "Naperville, IL 60567"],
      type: "text",
    },
    {
      id: "email",
      title: "Email:",
      content: ["info@codetokloud.com"],
      type: "link",
      href: "mailto:info@codetokloud.com",
      className: "text-[#193728] underline text-xl",
    },
    {
      id: "phone",
      title: "Phone Number:",
      content: ["+1 (480) 572-7818"],
      type: "link",
      href: "tel:+1 (480) 572-7818",
      className: "text-[#193728] text-xl",
    },
  ],

  socialMedia: {
    title: "Follow us at:",
    links: getContactSocialLinks(),
  },
};
