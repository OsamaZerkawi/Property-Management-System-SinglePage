import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Linkedin, Mail } from "lucide-react";
import ksm from "../assets/ksm.jpg";
import hasan from "../assets/hasan2.jpg";
import kareem from "../assets/kareem.jpg";
import ali from "../assets/ali.jpg";
import osama from "../assets/osama.jpg";

function Team({ t }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Abdullah Alksm",
      role: t.abdullah.role,
      bio: t.abdullah.bio,
      image: ksm,
      email: "abdullah@example.com",
      linkedin: "https://linkedin.com/in/abdullah",
      facebook: "https://www.facebook.com/abdalla.alkasm",
    },
    {
      id: 2,
      name: "Hasan Zeater",
      role: t.hasan.role,
      bio: t.hasan.bio,
      image: hasan,
      email: "hasan@example.com",
      linkedin: "https://linkedin.com/in/abdullah",
      facebook: "https://www.facebook.com/hasan.zaeter",
    },
    {
      id: 3,
      name: "Kareem Bizreh",
      role: t.kareem.role,
      bio: t.kareem.bio,
      image: kareem,
      email: "kareem@example.com",
      linkedin: "https://linkedin.com/in/abdullah",
      facebook: "https://www.facebook.com/kareem.bezreh",
    },
    {
      id: 4,
      name: "Mohamad Ali Alnuaimi",
      role: t.mohammad.role,
      bio: t.mohammad.bio,
      image: ali,
      email: "mohamad@example.com",
      linkedin: "https://linkedin.com/in/abdullah",
      facebook: "https://www.facebook.com/MohamadAliAlnuaimi",
    },
    {
      id: 5,
      name: "Osama Zerkawi",
      role: t.osama.role,
      bio: t.osama.bio,
      image: osama,
      email: "osama@example.com",
      linkedin: "https://linkedin.com/in/abdullah",
      facebook: "https://www.facebook.com/osama.zerkawi",
    },
  ];

  const slideVariants = {
    entering: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exiting: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex >= teamMembers.length) return 0;
      if (nextIndex < 0) return teamMembers.length - 1;
      return nextIndex;
    });
  };

  return (
    <section
      id="team"
      className="py-20 px-4 bg-gradient-to-b from-sky-50/50 to-white dark:from-sky-950/20 dark:to-sky-950/5"
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-sky-600">{t.teamTitle}</h2>
          <p className="text-xl text-muted-foreground mt-2">{t.teamSubtitle}</p>
        </motion.div>

        <div className="relative h-[500px] w-full max-w-4xl mx-auto overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="entering"
                animate="center"
                exit="exiting"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full max-w-md"
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row h-[400px]">
                  <div className="md:w-2/5 h-48 md:h-full">
                    <img
                      src={teamMembers[currentIndex].image}
                      alt={teamMembers[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-300">
                        {teamMembers[currentIndex].name}
                      </h3>
                      <p className="text-sky-600 dark:text-sky-400 font-medium mt-1">
                        {teamMembers[currentIndex].role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mt-4">
                        {teamMembers[currentIndex].bio}
                      </p>
                    </div>
                    <div className="flex mt-6 space-x-4">
                      {teamMembers[currentIndex].linkedin && (
                        <a
                          href={teamMembers[currentIndex].linkedin}
                          className="p-2 bg-sky-100 dark:bg-sky-900 rounded-full text-sky-600 dark:text-sky-300 hover:bg-sky-200 dark:hover:bg-sky-800 transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                      {teamMembers[currentIndex].facebook && (
                        <a
                          href={teamMembers[currentIndex].facebook}
                          className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                        >
                          {/* You can use a Facebook icon from lucide-react if you want */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 16.99 22 12z" />
                          </svg>
                        </a>
                      )}
                      <a
                        href={`mailto:${teamMembers[currentIndex].email}`}
                        className="p-2 bg-sky-100 dark:bg-sky-900 rounded-full text-sky-600 dark:text-sky-300 hover:bg-sky-200 dark:hover:bg-sky-800 transition-colors"
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-slate-800 p-2 rounded-full shadow-md hover:bg-sky-50 dark:hover:bg-slate-700 transition-colors"
            aria-label="Previous team member"
          >
            <ChevronLeft className="text-sky-600 dark:text-sky-300" size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-slate-800 p-2 rounded-full shadow-md hover:bg-sky-50 dark:hover:bg-slate-700 transition-colors"
            aria-label="Next team member"
          >
            <ChevronRight
              className="text-sky-600 dark:text-sky-300"
              size={24}
            />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex
                    ? "bg-sky-600 dark:bg-sky-400"
                    : "bg-sky-300 dark:bg-sky-700"
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
