import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export const contactEmail = "eitgelzaya@hotmail.com";

export type SocialLink = {
  name: string;
  icon: IconType;
  url: string;
  color: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    icon: FaEnvelope,
    url: `mailto:${contactEmail}`,
    color: "var(--brand-email)",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/E-Zaya",
    color: "var(--brand-github)",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/ezaya977/",
    color: "var(--brand-instagram)",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/profile.php?id=61578100397690",
    color: "var(--brand-facebook)",
  },
  {
    name: "X",
    icon: FaXTwitter,
    url: "https://x.com/EZaya0805",
    color: "var(--brand-x)",
  },
];