import React from "react";

interface PartnersCardProps {
  description: string;
  image: string;
}

const PartnersCard: React.FC<PartnersCardProps> = ({ description, image }) => {
  return (
    <div className="p-2 rounded-lg shadow-md border-4 transition duration-200 hover:scale-105 hover:border-igf-accent w-full max-w-md flex flex-col items-center text-center">
      <img
        src={image}
        alt="Partner logo"
        className="w-24 h-24 object-contain"
      />
      <p className="font-sans text-sm">{description}</p>
    </div>
  );
};

export default PartnersCard;
