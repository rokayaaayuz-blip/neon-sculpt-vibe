import { useEffect } from "react";

const ElfsightInstagramFeed = () => {
  useEffect(() => {
    // Check if script already exists to prevent duplicate loading
    if (document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Add custom styles to hide branding and FORCE 1024px width
    const style = document.createElement("style");
    style.id = "elfsight-custom-styles";
    v
    `;
    
    if (!document.getElementById("elfsight-custom-styles")) {
      document.head.appendChild(style);
    }

    return () => {
      const existingStyle = document.getElementById("elfsight-custom-styles");
      if (existingStyle) { existingStyle.remove(); }
    };
  }, []);

  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div 
        className="elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 w-full" 
        data-elfsight-app-lazy 
      />
    </div>
  );
};

export default ElfsightInstagramFeed;
