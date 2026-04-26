import { useState, useEffect } from "react";

const WindowTracker = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log("Resize Event:", window.innerWidth);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
      <p className="font-mono text-sm">Window Width: {width}px</p>
    </div>
  );
};

export default WindowTracker;