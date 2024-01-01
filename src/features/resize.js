import { useEffect, useState } from "react";
import { GlobalTheme } from "../common/theme";

export const useResize = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const mediaQuery = GlobalTheme.breakpoints.mediumDevices;
  
    useEffect(() => {
      const handleResize = () => {
        setScreenSize(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const isMediaQuery = () => (mediaQuery < screenSize ? true : false);

    return isMediaQuery
  };