import React from "react";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
  faGithub,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  githubUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  whatsappUrl?: string;
}

const socialIcons = [
  { key: "facebookUrl", icon: faFacebookF },
  { key: "linkedinUrl", icon: faLinkedinIn },
  { key: "twitterUrl", icon: faXTwitter },
  { key: "githubUrl", icon: faGithub },
  { key: "instagramUrl", icon: faInstagram },
  { key: "youtubeUrl", icon: faYoutube },
  { key: "whatsappUrl", icon: faWhatsapp },
];

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  image,
  facebookUrl,
  linkedinUrl,
  twitterUrl,
  githubUrl,
  instagramUrl,
  youtubeUrl,
  whatsappUrl,
}) => {
  const urls: Record<string, string | undefined> = {
    facebookUrl,
    linkedinUrl,
    twitterUrl,
    githubUrl,
    instagramUrl,
    youtubeUrl,
    whatsappUrl,
  };

  return (
    <div className="relative h-full overflow-hidden rounded-xl bg-igf-primary font-sans border-4 transition duration-200 hover:border-igf-accent">
      <img className="w-full object-cover" src={image} alt={name} />
      
      {/* Texte en overlay sur l'image */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-center">
        <h3 className="text-white text-xl font-semibold">{name}</h3>
        <p className="text-indigo-200/80 text-sm">{role}</p>
      </div>
    </div>
  );
};


export default TeamMemberCard;
