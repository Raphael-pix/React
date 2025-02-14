import {useState } from "react";

export default function RandomColorGenerator() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function handleRandomRgbColor() {
    let r = randomColorUtility(256);
    let g = randomColorUtility(256);
    let b = randomColorUtility(256);

    let rgb = `rgb(${r},${g},${b})`;

    setColor(rgb);
  }
  function hexToRgb(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Parse the r, g, b values
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    let rgb = `rgb(${r},${g},${b})`
    setColor(rgb)
  }
  function rgbToHex(rgb) {
    // Convert r, g, b values to hexadecimal and pad with zeroes if necessary
    rgb = rgb.replace(/rgb|\(|\)/gi,"").split(',')
    let r = parseInt(rgb[0])
    let g = parseInt(rgb[1])
    let b = parseInt(rgb[2])

    let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    setColor(hex)
}

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => {
    // colorType === "hex" ?(
      // handleRandomHexColor()
      // ):( 
      // handleRandomRgbColor()
      // );
  // }, [colorType]);
  return (
    <div
      className="container"
      style={{
        backgroundColor: color,
        width: "100vw",
        height: "100vh",
      }}
    >
      <button onClick={() =>{
        if(colorType === 'rgb'){
          rgbToHex(color)
          setColorType("hex")
        }else
        {
          handleRandomHexColor()
        }
      }}> Create Hex color</button>
      <button onClick={() =>{
         if(colorType === 'hex'){
           hexToRgb(color)
           setColorType("rgb")
         }else
         {
           handleRandomRgbColor()
         }
      }}>Create RGB color</button>
      <button
        onClick={
          colorType === "hex"
            ? () => handleRandomHexColor()
            : () => handleRandomRgbColor()
        }
      >
        Generate random color
      </button>

      <div
        className="content"
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
          fontSize: "2rem",
        }}
      >
        <h1>{colorType === "hex" ? "HEX color" : "RGB color"}</h1>
        <h2>{color}</h2>
      </div>
    </div>
  );
}
