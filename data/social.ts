import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { contactEmail } from "./site";

export type SocialLink = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/E-Zaya",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/itgelzaya-enkh-amgalan-800a833b7",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: `mailto:${contactEmail}`,
  },
];