export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-display text-xl font-semibold tracking-wider text-foreground">
              FORGE
            </span>
            <span className="ml-1 text-gold text-xs font-body tracking-widest">ELITE</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-foreground/40">
            © 2024 Forge Elite. All rights reserved.
          </p>

          {/* Seasonal Message */}
          <p className="text-sm text-foreground/40 italic">
            Train Strong This Winter
          </p>
        </div>
      </div>
    </footer>
  );
};
