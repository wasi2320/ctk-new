import { getFooterSocialLinks } from "./socialMedia";

export const FOOTER_DATA = {
  heading: "We build partnerships.",
  subHeading: "Let's break through together.",
  placeholder: "Your email address",
  buttonText: "Connect",
  logoCol: {
    subHeading:
      "We bring senior cloud and DevOps expertise to your team, and partner with you to ship reliable systems and real results.",
    heading: "We build partnerships with you.",
  },
  learnCol: [
    // { name: "Services", link: "/services" },
    // { name: "Expertise", link: "/expertise" },
    // { name: "Resources", link: "/resources" },
    { name: "Careers", link: "/careers" },
    { name: "About Us", link: "/aboutus" },
    { name: "Contact Us", link: "/contact" },
  ],
  contactCol: [
    { name: "Support", link: "#" },
    { name: "Email", link: "#" },
  ],
  addressCol: {
    addressOne: "CodetoKloud Inc PO Box 9165 \n Naperville, IL 60567",
    addressTwo: "+1 (309) 590-3617",
  },
  otherPages: [{ name: "Privacy Policy", link: "/privacy-policy" }],
  socialCol: getFooterSocialLinks(),
};
