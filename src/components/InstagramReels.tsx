import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const instagramReels = [
  { id: 1, reelId: "DQ8RJhVgWHq", title: "Workout Session" },
  { id: 2, reelId: "DQTBqODD3U4", title: "Training Tips" },
  { id: 3, reelId: "DPIggYZjzhd", title: "Gym Life" },
  { id: 4, reelId: "DNfpBV0hnuU", title: "Fitness Journey" },
  { id: 5, reelId: "DLytPsgP0ow", title: "Strength Training" },
  { id: 6, reelId: "DGQPsg-vWNk", title: "All Fit Moments" },
];

const InstagramReels = () => {
  const handleOpenInstagram = () => {
    window.open("https://www.instagram.com/allfit_c_block/", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase">
              Follow Us on <span className="accent-text-purple">Instagram</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg">
            @allfit_c_block
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramReels.map((reel, index) => (
            <div
              key={reel.id}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden glow-card animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <iframe
                src={`https://www.instagram.com/reel/${reel.reelId}/embed/`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title={`ALL FIT Instagram Reel - ${reel.title}`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/95 to-transparent">
                <Button 
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(`https://www.instagram.com/reel/${reel.reelId}/`, "_blank", "noopener,noreferrer")}
                  className="w-full text-xs hover:bg-primary/20"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Open in Instagram
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/allfit_c_block/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            onClick={handleOpenInstagram}
          >
            <Instagram className="w-5 h-5" />
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;
