import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState(null);

  const onResize = () => {
    const widthMove = window.innerWidth;
    setWidth(widthMove);
  };

  useEffect(() => {
    onResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return width;
};

export default useScreenSize;
