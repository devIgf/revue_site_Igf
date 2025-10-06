import React from "react";

interface PartnersCardProps {
  description: string;
  image: string;
}

const PartnersCard: React.FC<PartnersCardProps> = ({ description, image }) => {
  return (
    <div className="p-4 rounded-lg shadow-md border-4 transition duration-200 hover:scale-105 hover:border-igf-accent w-[90%] max-w-xl flex flex-col items-center text-cente  ">
      <img
        src={image}
        alt="Partner logo"
        className="w-36 h-36 object-contain"
      />
      <p className="font-sans text-base mt-4">{description}</p>
    </div>
  );
};

export default PartnersCard;
