
import React, { useState } from "react";
import "./Hover.css";

export default function Hover({ options }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="hover-wrapper">
      <ul className="hover-list">
        {options.map((option, index) => (
          <li
            key={index}
            className="hover-item"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {option}

            { hovered === index && (
              <div className="hover-popup">
                <div className="popup-box">Pants</div>
                <div className="popup-box">Shirt</div>
                <div className="popup-box">shoes</div>
                <div className="popup-box">Bags</div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
