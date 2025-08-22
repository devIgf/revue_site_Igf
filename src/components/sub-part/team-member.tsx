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
    <div className="relative z-20 h-full overflow-hidden rounded-xl bg-igf-primary font-sans border-4 transition duration-200 hover:border-igf-accent">
      <img className="w-full object-cover" src={image} alt={name} />
      <div className="p-6 text-center">
        <h3 className="text-white text-xl font-semibold mb-1">{name}</h3>
        <p className="text-indigo-200/65 text-sm mb-4">{role}</p>
        <div className="flex justify-center flex-wrap gap-3">
          {socialIcons.map(({ key, icon }) => {
            const url = urls[key];
            return (
              url && (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gradient-to-br from-green-400 to-blue-500 w-9 h-9 flex items-center justify-center rounded-md hover:scale-110 transition"
                >
                  <FontAwesomeIcon icon={icon} size="sm" />
                </a>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
