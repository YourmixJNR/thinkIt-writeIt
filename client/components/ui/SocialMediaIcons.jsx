import React from "react";
import { Link } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <>
      {icons.map(({ link, icon }, index) => (
        <Link key={index} href={link} isExternal>
          {icon}
        </Link>
      ))}
    </>
  );
};

export default SocialMediaIcons;

const icons = [
  {
    link: "https://www.facebook.com/victor.alagbe.982/",
    icon: <FaFacebook />,
  },
  {
    link: "https://www.instagram.com/yourmixjnr",
    icon: <FaInstagram />,
  },
  {
    link: "https://twitter.com/YourmixJNR",
    icon: <FaTwitter />,
  },
  { link: "https://www.linkedin.com/in/michael-victor-57615925a/", icon: <FaLinkedin /> },
];
