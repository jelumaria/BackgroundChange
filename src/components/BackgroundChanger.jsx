// src/components/BackgroundChanger.jsx
import React, { useState } from "react";
import "../BackgroundChanger.css";

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState("white");

  const colors = [
    "lightblue",
    "blue",
    "lightgreen",
    "yellow",
    
    "lavender",
    "lightpink",
    "black",
    "red",
  ];

  return (
    <div className="background-changer" style={{ backgroundColor: bgColor }}>
      <h1>Change Background Color</h1>
      <div className="button-container">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setBgColor(color)}
            style={{ backgroundColor: color }}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundChanger;
