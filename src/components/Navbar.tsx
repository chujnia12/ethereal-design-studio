import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 glass-surface"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          <span className="text-gradient-gold">NEXUS</span>
          <span className="text-muted-foreground font-light ml-1">studio</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Usługi", "Realizacje", "Proces", "Kontakt"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 line-reveal pb-1"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#kontakt"
          className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Rozpocznij projekt
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
