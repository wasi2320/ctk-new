export const SOCIAL_MEDIA_LINKS = {
  facebook: {
    name: "Facebook",
    url: "https://www.facebook.com/share/1AjsbfDZeR/",
    icon: "/Images/Social_1.svg",
    imageIcon: "/Images/fb-link.png",
    ariaLabel: "Facebook",
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/codetokloud-inc/",
    icon: "/Images/Social_2.svg",
    imageIcon: "/Images/link-link.png",
    ariaLabel: "LinkedIn",
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/codetokloud/",
    icon: "/Images/Social_3.png",
    imageIcon: "/Images/insta-link.png",
    ariaLabel: "Instagram",
  },
  twitter: {
    name: "Twitter",
    url: "https://x.com/CodetoKloud",
    icon: "/Images/Social_4.png",
    imageIcon: "/Images/twitter-link.png",
    ariaLabel: "Twitter",
  },
};

// Helper function to get all social media links as an array
export const getSocialMediaArray = () => {
  return Object.values(SOCIAL_MEDIA_LINKS);
};

// Helper function to get social media links for footer (SVG icons)
export const getFooterSocialLinks = () => {
  return getSocialMediaArray().map((social) => ({
    icon: social.icon,
    url: social.url,
  }));
};

// Helper function to get social media links for contact sections (image icons)
export const getContactSocialLinks = () => {
  return getSocialMediaArray().map((social) => ({
    id: social.name.toLowerCase(),
    name: social.name,
    icon: social.imageIcon,
    url: social.url,
    ariaLabel: social.ariaLabel,
  }));
};
