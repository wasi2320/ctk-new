export const SOCIAL_MEDIA_LINKS = {
  facebook: {
    name: "Facebook",
    url: "https://www.facebook.com/people/CodetoKloud/61577188241553/",
    icon: "/Images/Social_1.svg",
    imageIcon: "/Images/Social_1.svg",
    ariaLabel: "Facebook",
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/codetokloud-inc/",
    icon: "/Images/Social_2.svg",
    imageIcon: "/Images/Social_2.svg",
    ariaLabel: "LinkedIn",
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/codetokloud/",
    icon: "/Images/insta-link.png",
    imageIcon: "/Images/insta-link.png",
    ariaLabel: "Instagram",
  },
  twitter: {
    name: "Twitter",
    url: "https://x.com/CodetoKloud",
    icon: "/Images/Social_4.png",
    imageIcon: "/Images/Social_4.png",
    ariaLabel: "Twitter",
  },
};

// Helper function to get all social media links as an array
export const getSocialMediaArray = () => {
  return Object.values(SOCIAL_MEDIA_LINKS);
};

// Helper function to get social media links for footer (maintains backward compatibility)
export const getFooterSocialLinks = () => {
  return getSocialMediaArray().map((social) => ({
    icon: social.icon,
    url: social.url,
    ariaLabel: social.ariaLabel,
  }));
};

// Helper function to get social media links for contact sections (maintains backward compatibility)
export const getContactSocialLinks = () => {
  return getSocialMediaArray().map((social) => ({
    id: social.name.toLowerCase(),
    name: social.name,
    icon: social.imageIcon,
    url: social.url,
    ariaLabel: social.ariaLabel,
  }));
};

// NEW: Helper function to get social media links with React icons for modern components
export const getReactSocialLinks = () => {
  return getSocialMediaArray().map((social) => ({
    id: social.name.toLowerCase(),
    name: social.name,
    icon: social.imageIcon,
    url: social.url,
    ariaLabel: social.ariaLabel,
  }));
};
