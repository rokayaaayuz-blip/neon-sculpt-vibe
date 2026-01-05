import { useEffect } from "react";

const ElfsightInstagramFeed = () => {
  useEffect(() => {
    // 1. Prevent duplicate script loading
    if (document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // 2. Create AND APPEND the style tag to force the 1024px width
    const style = document.createElement("style");
    style.id = "elfsight-custom-styles";
    style.textContent = `
      .eapps-link, a[href*="elfsight.com"] { display: none !important; }
      
      .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 {
        width: 100% !important;
        max-width: 1024px !important; 
        margin: 0 auto !important;
        display: block !important;
      }
      
      .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 > div {
        width: 100% !important;
      }
    `;
    document.head.appendChild(style); 

    return () => {
      const existingStyle = document.getElementById("elfsight-custom-styles");
      if (existingStyle) existingStyle.remove();
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
