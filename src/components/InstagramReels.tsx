import { Instagram } from "lucide-react";
import ElfsightInstagramFeed from "./ElfsightInstagramFeed";

const InstagramReels = () => {
  return (
    <section className="py-24 bg-card/30 w-full overflow-hidden">
      {/* We use a fixed max-width instead of the responsive 'container' class */}
      <div className="max-w-[1024px] mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase">
              Follow Us on <span className="accent-text-purple">Instagram</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg">@allfit_c_block</p>
        </div>
        
        <ElfsightInstagramFeed />
        
        <div className="text-center mt-8">
          <a href="https://www.instagram.com/allfit_c_block/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
            <Instagram className="w-5 h-5" />
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;
