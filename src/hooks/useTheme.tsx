import React, { useEffect } from "react";
import { Theme } from "./type";
import useLuminance from "./useLuminance";

function useTheme(bgColor: string): Theme {
  const luminance = useLuminance(bgColor);
  const [theme, setTheme] = React.useState<Theme>("light");

  useEffect(() => {
    setTheme(luminance < 0.5 ? "dark" : "light");
  }, [luminance]);

  return theme;
}

export default useTheme;
