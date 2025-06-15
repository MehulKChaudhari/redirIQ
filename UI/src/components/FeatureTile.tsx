interface FeatureTileProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
  comingSoon?: boolean;
}

export const FeatureTile: React.FC<FeatureTileProps> = ({
  title,
  description,
  icon,
  isActive = false,
  comingSoon = false,
}) => {
  const baseClasses = "text-center p-8 rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden transition-all duration-300";
  const activeClasses = isActive
    ? "bg-white hover:shadow-xl transform hover:scale-105"
    : "bg-gray-50 opacity-60";

  return (
    <div className={`${baseClasses} ${activeClasses}`}>
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/20 to-blue-50/30"></div>
      )}
      {comingSoon && (
        <div className="absolute top-4 right-4 bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
          Coming Soon
        </div>
      )}

      <div className="relative z-10">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${
            isActive
              ? "bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 ring-1 ring-white/20"
              : "bg-gray-400"
          }`}
        >
          {icon}
        </div>
        <h3 className={`font-bold mb-3 text-lg ${isActive ? "text-gray-800" : "text-gray-600"}`}>
          {title}
        </h3>
        <p className={isActive ? "text-gray-600" : "text-gray-500"}>{description}</p>
      </div>
    </div>
  );
}; 