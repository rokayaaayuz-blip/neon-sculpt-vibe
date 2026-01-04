import { useState } from "react";
import { Instagram, Play, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
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
  const [selectedReel, setSelectedReel] = useState<typeof instagramReels[0] | null>(null);

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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramReels.map((reel, index) => (
            <div
              key={reel.id}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden glow-card animate-fade-up opacity-0 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedReel(reel)}
            >
              {/* Embed as thumbnail */}
              <div className="absolute inset-0 pointer-events-none">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.reelId}/embed/`}
                  className="w-full h-full border-0 scale-[1.01]"
                  loading="lazy"
                  title={`ALL FIT Instagram Reel - ${reel.title}`}
                />
              </div>
              {/* Clickable overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-5 h-5 text-primary-foreground ml-1" />
                </div>
              </div>
              <div className="absolute top-3 right-3 z-20">
                <Instagram className="w-5 h-5 text-foreground/80 drop-shadow-lg" />
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
          >
            <Instagram className="w-5 h-5" />
            View More on Instagram
          </a>
        </div>
      </div>

      {/* Enlarged Reel Player Dialog */}
      <Dialog open={!!selectedReel} onOpenChange={() => setSelectedReel(null)}>
        <DialogContent className="max-w-md p-0 overflow-hidden bg-card border-border">
          {selectedReel && (
            <div className="flex flex-col">
              <div className="relative w-full aspect-[9/16]">
                <iframe
                  src={`https://www.instagram.com/reel/${selectedReel.reelId}/embed/`}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  title={`ALL FIT Instagram Reel - ${selectedReel.title}`}
                />
              </div>
              <div className="p-4">
                <Button 
                  onClick={() => window.open(`https://www.instagram.com/reel/${selectedReel.reelId}/`, "_blank", "noopener,noreferrer")}
                  className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white font-semibold"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Open in Instagram
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InstagramReels;
