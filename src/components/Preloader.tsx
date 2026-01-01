import { useState, useEffect } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsFadingOut(true);
      setTimeout(() => setIsVisible(false), 500);
    };

    if (document.readyState === "complete") {
      // Content already loaded, fade out after minimum display time
      setTimeout(handleLoad, 800);
    } else {
      window.addEventListener("load", () => {
        setTimeout(handleLoad, 300);
      });
    }

    // Fallback: hide after 3 seconds max
    const fallbackTimeout = setTimeout(handleLoad, 3000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="loader__balls">
        <div className="loader__balls__group">
          <span className="ball item1"></span>
          <span className="ball item2"></span>
          <span className="ball item3"></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
