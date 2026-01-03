const GoogleMap = () => {
  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase mb-4">
            Find <span className="accent-text-green">Us</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Visit ALL FIT at C Block, Sushant Lok Phase 1, Gurugram
          </p>
        </div>
        
        <div className="glow-card overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2!2d77.0809!3d28.4681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18c4f6c8e8f1%3A0x1234567890abcdef!2sSushant%20Lok%20Phase%201%2C%20Sector%2043%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ALL FIT Gym Location - C Block, Sushant Lok Phase 1, Gurugram"
            className="w-full h-[300px] md:h-[400px]"
          />
        </div>
        
        <div className="mt-6 text-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Sushant+Lok+Phase+1+Gurugram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(142_76%_30%)] text-white rounded-full font-semibold hover:bg-[hsl(142_76%_25%)] transition-colors"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
