import { useState } from "react";
import ColorSwitch from "./ColorSwitch";

const Color = () => {
  const [clicks, setClicks] = useState(0);

  const handleClickOutside = () => {
    setClicks((c) => c + 1);
  };

  const getRandomLightColor = () => {
    const r = 150 + Math.round(100 * Math.random());
    const g = 150 + Math.round(100 * Math.random());
    const b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleChangeColor = () => {
    const bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  };

  return (
    <div style={{ width: "100%", height: "100%" }} onClick={handleClickOutside}>
      <ColorSwitch onChange={handleChangeColor} />
      <br />
      <br />
      <h2>Clicks on the page: {clicks}</h2>
    </div>
  );
};

export default Color;
