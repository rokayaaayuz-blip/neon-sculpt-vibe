import { Instagram, Play } from "lucide-react";

const instagramReels = [
  { id: 1, thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=400&fit=crop" },
  { id: 2, thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=400&fit=crop" },
  { id: 3, thumbnail: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=400&fit=crop" },
  { id: 4, thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=300&h=400&fit=crop" },
  { id: 5, thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300&h=400&fit=crop" },
  { id: 6, thumbnail: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300&h=400&fit=crop" },
];

const InstagramReels = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display uppercase">
              Follow Us on <span className="accent-text-purple">Instagram</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            @allfit_c_block
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramReels.map((reel, index) => (
            <a
              key={reel.id}
              href="https://www.instagram.com/allfit_c_block/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden glow-card animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={reel.thumbnail}
                alt={`ALL FIT Instagram Reel ${reel.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary-foreground ml-1" />
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <Instagram className="w-5 h-5 text-foreground/80" />
              </div>
            </a>
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
    </section>
  );
};

export default InstagramReels;
