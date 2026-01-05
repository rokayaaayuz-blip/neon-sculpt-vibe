import { useEffect } from "react";

const ElfsightInstagramFeed = () => {
  useEffect(() => {
    if (document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    const style = document.createElement("style");
    style.id = "elfsight-custom-styles";
    // REPLACE everything from 'const style' down to the 'return () =>' cleanup
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
    `;
    document.head.appendChild(style); // This line is CRITICAL to make it work
    document.head.appendChild(style); // Injection

    return () => {
      const existingStyle = document.getElementById("elfsight-custom-styles");
      if (existingStyle) existingStyle.remove();
    };
  }, []); // <--- Ensure this closing is present

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
