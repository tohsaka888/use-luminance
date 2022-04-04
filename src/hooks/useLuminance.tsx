import React, {
  useCallback,
  useEffect,
  useState,
  useDeferredValue,
} from "react";

function useLuminance(bgColor: string): number {
  const [luminance, setLuminance] = useState<number>(0);
  const deferredColor = useDeferredValue(bgColor);
  const hexToRgb = useCallback((bgColor: string) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(bgColor);
    if (result) {
      const r = parseInt(result![1], 16);
      const g = parseInt(result![2], 16);
      const b = parseInt(result![3], 16);
      return [r, g, b];
    } else {
      return [255, 255, 255];
    }
  }, []);
  useEffect(() => {
    let rgb: number[] | string[] = [];
    if (deferredColor?.includes("rgb")) {
      rgb = deferredColor?.match(/\d+(\.\d+)?/g)?.slice(0, 3) as string[];
    } else if (deferredColor?.includes("#")) {
      rgb = hexToRgb(deferredColor);
    }
    setLuminance(+rgb[0] * 0.212656 + +rgb[1] * 0.715158 + +rgb[2] * 0.072186);
    console.log(+rgb[0] * 0.212656 + +rgb[1] * 0.715158 + +rgb[2] * 0.072186);
  }, [deferredColor, hexToRgb]);
  return luminance / 255;
}

export default useLuminance;
