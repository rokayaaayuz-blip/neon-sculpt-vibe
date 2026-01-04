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

    return () => {
      // Cleanup is optional since Elfsight manages its own state
    };
  }, []);

  return (
    <div 
      className="elfsight-app-902afde0-b118-4d96-a531-b93fcde4abb5" 
      data-elfsight-app-lazy 
    />
  );
};

export default ElfsightInstagramFeed;
