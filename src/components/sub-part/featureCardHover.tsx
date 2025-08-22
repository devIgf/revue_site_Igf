interface FeatureCardProps {
  title: string;
  image: string;
  popoverText: string;
}

export function FeatureCardHover({
  title,
  image,
  popoverText,
}: FeatureCardProps) {
  return (
    <div className="relative group w-72 sm:w-72 md:w-72 lg:w-72 h-full border-4 transition duration-200 hover:scale-105 hover:border-igf-accent">
      {/* Image */}
      <div className="h-40 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-300 group-hover:brightness-75 group-hover:blur-[2px]"
        />

        {/* Popover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 text-center">
          <div className="bg-igf-accent/90 text-white text-xs p-3 rounded-lg shadow-lg">
            {popoverText}
          </div>
        </div>
      </div>

      {/* Title bar */}
      <div className="text-white text-center py-2 text-sm bg-igf-primary font-sans">
        {title}
      </div>
    </div>
  );
}
