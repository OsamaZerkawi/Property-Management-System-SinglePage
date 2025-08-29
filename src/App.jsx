// import { useState, useEffect } from "react";
// import { useScroll, useTransform } from "framer-motion";
// import { translations } from "./components/translations";

// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Footer from "./components/Footer";
// import TopOffices from "./features/top_offices/TopOffices";
// import AgentRegistrationModal from "./modals/AgentRegistrationModal";

// import "./App.css";

// function App() {
//   const [isDark, setIsDark] = useState(false);
//   const [language, setLanguage] = useState("ar");
//   const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);

//   const { scrollY } = useScroll();
//   const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
//   const textY = useTransform(scrollY, [0, 500], [0, 100]);

//   const t = translations[language];

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", isDark);
//     document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
//   }, [isDark, language]);

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Header
//         t={t}
//         isDark={isDark}
//         toggleTheme={() => setIsDark(!isDark)}
//         toggleLanguage={() => setLanguage(language === "ar" ? "en" : "ar")}
//         openAgentModal={() => setIsAgentModalOpen(true)}
//       />

//       <Hero t={t} backgroundY={backgroundY} textY={textY} />

//       <Services t={t} />

//       <section
//         id="offices"
//         className="py-20 px-4 bg-sky-50/50 dark:bg-sky-950/20"
//       >
//         <div className="container mx-auto">
//           <TopOffices t={t} />
//         </div>
//       </section>

//       <Footer t={t} />

//       <AgentRegistrationModal
//         isOpen={isAgentModalOpen}
//         onClose={() => setIsAgentModalOpen(false)}
//         translations={t}
//         language={language}
//       />
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import { translations } from "./components/translations";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import TopOffices from "./features/top_offices/TopOffices";
import AgentRegistrationModal from "./modals/AgentRegistrationModal";
import Team from "./components/Team"; 
import TopProperties from "./features/top_properties/TopProperties";

import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("ar");
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);

  const t = translations[language];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [isDark, language]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        t={t}
        isDark={isDark}
        toggleTheme={() => setIsDark(!isDark)}
        toggleLanguage={() => setLanguage(language === "ar" ? "en" : "ar")}
        openAgentModal={() => setIsAgentModalOpen(true)}
      />
      <Hero t={t} backgroundY={backgroundY} textY={textY} />
      <Services t={t} />

      <section
        id="offices"
        className="py-20 px-4 bg-sky-50/50 dark:bg-sky-950/20"
      >
        <div className="container mx-auto">
          <TopOffices t={t} />
        </div>
      </section>

      {/* ✅ Top Properties */}
      <TopProperties t={t} />

      <section id="team">
        <div>
          <Team t={t} />
        </div>
      </section>

      <section id="footer">
        <Footer t={t} />
      </section>

      <AgentRegistrationModal
        isOpen={isAgentModalOpen}
        onClose={() => setIsAgentModalOpen(false)}
        translations={t}
        language={language}
      />
    </div>
  );
}

export default App;
