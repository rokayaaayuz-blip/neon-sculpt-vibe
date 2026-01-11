import { useState, useRef } from "react";
import { Instagram, Play, X, ExternalLink } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import videos as ES6 modules
import reelBuilt from "@/assets/reels/reel-built-2.mp4";
import reelBackDay from "@/assets/reels/reel-back-day.mp4";
import reelDance from "@/assets/reels/reel-dance-2.mp4";

// Import thumbnails
import thumbnailBuilt from "@/assets/reels/reel-built-thumbnail.webp";
import thumbnailBackDay from "@/assets/reels/reel-back-day-thumbnail.webp";
import thumbnailDance from "@/assets/reels/reel-dance-thumbnail.webp";

interface Reel {
  id: number;
  video: string;
  thumbnail: string;
  title: string;
  instagramUrl: string;
}

const reels: Reel[] = [
  {
    id: 1,
    video: reelBuilt,
    thumbnail: thumbnailBuilt,
    title: "Built Brick by Brick",
    instagramUrl: "https://www.instagram.com/allfit_c_block/",
  },
  {
    id: 2,
    video: reelBackDay,
    thumbnail: thumbnailBackDay,
    title: "Back Day Workout",
    instagramUrl: "https://www.instagram.com/allfit_c_block/",
  },
  {
    id: 3,
    video: reelDance,
    thumbnail: thumbnailDance,
    title: "Dance & Rhythm",
    instagramUrl: "https://www.instagram.com/allfit_c_block/",
  },
];

const ReelCard = ({ reel, onClick }: { reel: Reel; onClick: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
    >
      {/* Thumbnail Image - shown by default */}
      <img
        src={reel.thumbnail}
        alt={reel.title}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isHovering ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video - shown on hover */}
      <video
        ref={videoRef}
        src={reel.video}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

      {/* Play Button - hide on hover */}
      <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
          <Play className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-primary/30 transition-all duration-300" />
    </div>
  );
};

const InstagramReels = () => {
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleReelClick = (reel: Reel) => {
    setSelectedReel(reel);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedReel(null);
  };

  return (
    <section className="py-24 bg-card/30 w-full overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Header */}
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

        {/* Reels Grid - 3 cols */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {reels.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              onClick={() => handleReelClick(reel)}
            />
          ))}
        </div>

        {/* View More Link */}
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

      {/* Reel Modal */}
      <Dialog open={!!selectedReel} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className="max-w-sm md:max-w-md p-0 bg-background/95 backdrop-blur-xl border-border/50 rounded-2xl overflow-hidden [&>button]:hidden">
          {selectedReel && (
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 z-50 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors border border-border/50"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Video Player */}
              <video
                ref={videoRef}
                src={selectedReel.video}
                className="w-full aspect-[9/16] object-cover"
                autoPlay
                controls
                playsInline
              />

              {/* View on Instagram Button */}
              <div className="p-4 bg-card/50">
                <a
                  href={selectedReel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                  View on Instagram
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InstagramReels;
