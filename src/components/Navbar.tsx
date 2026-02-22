import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Navbar = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.nav
      ref={ref}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className="absolute inset-0 glass"
        style={{ opacity: bgOpacity }}
      />
      <div className="relative max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          NEXUS
          <span className="text-muted-foreground font-light tracking-wider text-sm ml-1.5">STUDIO</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["Usługi", "Realizacje", "Proces", "Kontakt"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-500 tracking-widest uppercase line-reveal pb-0.5"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#kontakt"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden md:inline-flex px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase glass glass-hover text-foreground transition-all duration-500"
        >
          Kontakt
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
