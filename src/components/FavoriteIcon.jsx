import React, { useState } from "react";

const FavoriteIcon = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className="w-10 h-10 cursor-pointer transition-colors duration-300 flex items-center justify-center"
      onClick={toggleFavorite}
      role="button"
      aria-label="Toggle Favorite"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isFavorite ? "black" : "none"}
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className="w-full h-full"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1.1 4.13 2.82h.74C13.09 6.1 14.76 5 16.5 5 18.58 5 20 6.42 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
  );
};

export default FavoriteIcon;
