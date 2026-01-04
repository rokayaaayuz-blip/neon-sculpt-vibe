import { useState } from "react";
import { Instagram, Play, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const instagramReels = [
  { 
    id: 1, 
    reelId: "DQ8RJhVgWHq", 
    title: "Workout Session",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=400&fit=crop"
  },
  { 
    id: 2, 
    reelId: "DQTBqODD3U4", 
    title: "Training Tips",
    thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=400&fit=crop"
  },
  { 
    id: 3, 
    reelId: "DPIggYZjzhd", 
    title: "Gym Life",
    thumbnail: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=400&fit=crop"
  },
  { 
    id: 4, 
    reelId: "DNfpBV0hnuU", 
    title: "Fitness Journey",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=400&fit=crop"
  },
  { 
    id: 5, 
    reelId: "DLytPsgP0ow", 
    title: "Strength Training",
    thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300&h=400&fit=crop"
  },
  { 
    id: 6, 
    reelId: "DGQPsg-vWNk", 
    title: "All Fit Moments",
    thumbnail: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300&h=400&fit=crop"
  },
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
            <button
              key={reel.id}
              onClick={() => setSelectedReel(reel)}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden glow-card animate-fade-up opacity-0 cursor-pointer text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={reel.thumbnail}
                alt={`ALL FIT Instagram Reel - ${reel.title}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-5 h-5 text-primary-foreground ml-1" />
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <Instagram className="w-5 h-5 text-foreground/80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-xs text-foreground/90 font-medium text-center truncate">
                  {reel.title}
                </p>
              </div>
            </button>
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

      {/* Reel Player Dialog */}
      <Dialog open={!!selectedReel} onOpenChange={() => setSelectedReel(null)}>
        <DialogContent className="max-w-md p-0 overflow-hidden bg-card border-border">
          {selectedReel && (
            <div className="flex flex-col">
              <div className="relative w-full aspect-[9/16]">
                <iframe
                  src={`https://www.instagram.com/reel/${selectedReel.reelId}/embed/`}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
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
