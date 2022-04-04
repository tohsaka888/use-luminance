import React from "react";
import "./App.css";
import useLuminance from "./hooks/useLuminance";
import useTheme from "./hooks/useTheme";

function App() {
  const [bgColor, setBgColor] = React.useState("#000000");
  const luminance = useLuminance(bgColor);
  const luminance1 = useLuminance(bgColor);
  const theme = useTheme(bgColor);
  const theme1 = useTheme(bgColor);
  return (
    <div style={{ background: bgColor }}>
      <input type="color" onChange={(e) => setBgColor(e.target.value)} />
      <input type="color" />
      <div style={{ marginTop: "300px" }}>
        {luminance} {luminance1}
      </div>
      <div>
        {theme} {theme1}
      </div>
    </div>
  );
}

export default App;
