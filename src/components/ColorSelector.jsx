import React, { useState } from "react";

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(""); // Track selected color

  const colors = ["#DA8A67", "#ebc883", "#cfcfcf"];

  return (
    <div className="text-left m-1">
      <div className="flex justify-start gap-2">
        {colors.map((color) => (
          <div
            key={color}
            className={`w-5 h-5 rounded-full cursor-pointer border transition-transform duration-300
              ${selectedColor === color ? "scale-110 border-black/60" : "border-transparent"}
              hover:scale-105 hover:border-black/40`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
