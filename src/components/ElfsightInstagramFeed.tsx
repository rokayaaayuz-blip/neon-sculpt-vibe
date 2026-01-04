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

    // Add custom styles to hide Elfsight branding and make responsive
    const style = document.createElement("style");
    style.id = "elfsight-custom-styles";
    style.textContent = `
      /* Hide Elfsight branding and controls */
      .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 [class*="eapps-link"],
      .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 [class*="powered-by"],
      .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 [class*="PoweredBy"],
      .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 [class*="eapps-instagram-feed-posts-item-template-tile-icons"],
      .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 [class*="share"],
      .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 [class*="views"],
      .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 a[href*="elfsight"],
      .eapps-instagram-feed-posts-item-template-tile-icons,
      .eapps-link,
      a[href*="elfsight.com"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        overflow: hidden !important;
      }
      
      /* Make widget responsive */
      .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 {
        width: 100% !important;
        max-width: 100% !important;
      }
      
      .elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 > div {
        width: 100% !important;
      }
    `;
    
    if (!document.getElementById("elfsight-custom-styles")) {
      document.head.appendChild(style);
    }

    return () => {
      // Cleanup styles on unmount
      const existingStyle = document.getElementById("elfsight-custom-styles");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div 
        className="elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5 w-full" 
        data-elfsight-app-lazy 
      />
    </div>
  );
};

export default ElfsightInstagramFeed;
