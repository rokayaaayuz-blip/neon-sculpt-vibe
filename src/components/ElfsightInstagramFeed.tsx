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

    // 2. Create the style tag to force 1024px (4xl) width
    const style = document.createElement("style");
    style.id = "elfsight-custom-styles";
    style.textContent = `
      /* Hide Elfsight branding */
      .eapps-link, a[href*="elfsight.com"] { display: none !important; }
      
      /* FORCE 4xl (896px) fixed width on desktop */
      @media (min-width: 1024px) {
        .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5,
        .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 > div,
        .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 * {
          width: 56rem !important;
          min-width: 56rem !important;
          max-width: 56rem !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
      }
      
      /* Mobile: full width */
      @media (max-width: 1023px) {
        .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 {
          width: 100% !important;
          max-width: 100% !important;
        }
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
