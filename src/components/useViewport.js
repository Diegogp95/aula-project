import {useState, useEffect} from "react";

const useViewport = (minWidth) => {
    const [isWide, setWide] = useState(window.innerWidth >= minWidth);
  
    useEffect(() => {
      const handleWindowResize = () => setWide(window.innerWidth >= minWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, [minWidth]);

    return { isWide };
}

export default useViewport;