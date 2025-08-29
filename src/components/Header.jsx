import { Building2, Sun, Moon, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

function Header({ t, isDark, toggleTheme, toggleLanguage, openAgentModal }) {
  const handleUserLogin = () => {
    window.open("https://t.me/propoly1", "_blank");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div className="text-xl font-bold text-sky-600  mr-3">Propoly</div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <a href="#home" className="hover:text-sky-600">
            {t.navHome}
          </a>
          <a href="#services" className="hover:text-sky-600">
            {t.navServices}
          </a>
          <a href="#offices" className="hover:text-sky-600">
            {t.navOffices}
          </a>
          <a href="#contact" className="hover:text-sky-600 mr-4">
            {t.navContact}
          </a>
        </nav>

        {/* Controls */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Button
            variant="outline"
            className="bg-sky-50"
            onClick={openAgentModal}
          >
            {t.loginAsAgent}
          </Button>
          <Button
            className="bg-sky-600 hover:bg-sky-700 flex items-center gap-2"
            onClick={handleUserLogin}
          >
            <Smartphone className="w-4 h-4" />
            {t.downloadMobileApp}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleLanguage}>
            <Globe className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
