import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import modernArchitectureBackground from "@/assets/modern_architecture_background.jpg";

function Hero({ t, backgroundY, textY }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <img
          src={modernArchitectureBackground}
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-600/20"></div>
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ y: textY }}
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r   from-sky-600 to-blue-600 bg-clip-text text-transparent leading-normal">
          {t.heroTitle}
        </motion.h1>
        <motion.p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          {t.heroSubtitle}
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-sky-600 hover:bg-sky-700"
            onClick={() => {
              const teamSection = document.getElementById("properties");
              teamSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.exploreProperties}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-sky-200 text-sky-700 hover:bg-sky-50"
            onClick={() => {
              const teamSection = document.getElementById("footer");
              teamSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.contactUs}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
