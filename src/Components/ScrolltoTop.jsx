import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrolltoTop = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
};

export default ScrolltoTop;
