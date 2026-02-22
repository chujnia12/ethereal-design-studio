import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    title: "Meridian",
    subtitle: "Finance",
    category: "Fintech • SaaS Dashboard",
    description: "Platforma zarządzania inwestycjami z real-time analytics i predykcjami AI. Zaprojektowaliśmy i zbudowaliśmy system od zera.",
    image: portfolio1,
    year: "2025",
    tech: ["React", "TypeScript", "Three.js"],
  },
  {
    title: "Maison",
    subtitle: "Noir",
    category: "Luxury • E-commerce",
    description: "Ekskluzywny sklep online dla domu luksusowych świec. Immersyjne doświadczenie zakupowe z AR preview produktów.",
    image: portfolio2,
    year: "2025",
    tech: ["Next.js", "Shopify", "GSAP"],
  },
  {
    title: "Archon",
    subtitle: "Studios",
    category: "Architecture • Portfolio",
    description: "Portfolio studia architektonicznego z 3D walkthroughs i interaktywnymi planami pięter. Nagradzany design.",
    image: portfolio3,
    year: "2024",
    tech: ["React", "R3F", "Framer Motion"],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isHovered, setIsHovered] = useState(false);

  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12 lg:py-20">
        {/* Image */}
        <div className={`lg:col-span-7 relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
          <motion.div
            className="aspect-[16/10] overflow-hidden rounded-2xl relative"
            style={{ y: imageY }}
          >
            <motion.img
              src={project.image}
              alt={`${project.title} ${project.subtitle}`}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>

          {/* Glass tag */}
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 glass rounded-full"
            animate={{ opacity: isHovered ? 1 : 0.6 }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/80">{project.year}</span>
          </motion.div>
        </div>

        {/* Content */}
        <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
          <motion.span
            className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-4"
            animate={{ opacity: isHovered ? 1 : 0.5 }}
            transition={{ duration: 0.5 }}
          >
            {project.category}
          </motion.span>

          <h3 className="font-display text-5xl sm:text-7xl font-bold tracking-tighter leading-[0.9] mb-2">
            <motion.span
              className="block text-gradient-white"
              animate={{ x: isHovered ? (index % 2 === 1 ? -10 : 10) : 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.title}
            </motion.span>
            <motion.span
              className="block text-gradient-subtle"
              animate={{ x: isHovered ? (index % 2 === 1 ? -20 : 20) : 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {project.subtitle}
            </motion.span>
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mt-6 max-w-sm">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className={`flex gap-2 mt-6 flex-wrap ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-[10px] tracking-wider uppercase glass text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className={`mt-8 ${index % 2 === 1 ? 'lg:flex lg:justify-end' : ''}`}
            animate={{ opacity: isHovered ? 1 : 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-foreground cursor-pointer group/link">
              <span className="line-reveal pb-0.5">Zobacz projekt</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                animate={{ x: isHovered ? 4 : 0 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Separator */}
      {index < projects.length - 1 && (
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      )}
    </motion.div>
  );
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="realizacje" className="relative py-40 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-20"
        >
          <span className="text-[11px] text-muted-foreground tracking-[0.4em] uppercase font-medium block mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-5xl sm:text-7xl font-bold tracking-tighter text-gradient-white">
            Wybrane
            <br />
            realizacje
          </h2>
        </motion.div>

        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
