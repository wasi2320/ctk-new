import { getFooterSocialLinks } from "./socialMedia";

export const FOOTER_DATA = {
  heading: "We build partnerships.",
  subHeading: "Let's break through together.",
  placeholder: "Your email address",
  buttonText: "Connect",
  logoCol: {
    subHeading:
      "Empower your team with cloud expertise that fosters innovation and growth. Together, we drive success through collaborative solutions.",
    heading: "We build partnerships with you.",
  },
  learnCol: [
    // { name: "Services", link: "/services" },
    // { name: "Expertise", link: "/expertise" },
    // { name: "Resources", link: "/resources" },
    { name: "About Us", link: "/aboutus" },
    { name: "Contact Us", link: "/contact" },
  ],
  contactCol: [
    { name: "Support", link: "#" },
    { name: "Email", link: "#" },
  ],
  addressCol: {
    addressOne: "Codetokloud Inc PO Box 9165 Naperville, IL 60567",
    addressTwo: "+1 (480) 572-7818",
  },
  otherPages: [{ name: "Privacy Policy", link: "/privacy-policy" }],
  socialCol: getFooterSocialLinks(),
};
