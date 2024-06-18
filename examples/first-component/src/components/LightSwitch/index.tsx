const LightSwitch = () => {
  const handleClick = () => {
    const bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  };

  return (
    <button className="box" onClick={handleClick}>
      Toggle the lights
    </button>
  );
};

export default LightSwitch;
