import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Building2, 
  Home, 
  Settings, 
  MessageCircle, 
  Sun, 
  Moon, 
  Globe,
  MapPin,
  Star,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Smartphone
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { translations } from './translations'
import AgentRegistrationModal from './components/AgentRegistrationModal'
import touristProperty1 from './assets/tourist_property_1.jpg'
import touristProperty2 from './assets/tourist_property_2.jpg'
import realEstateOffice1 from './assets/real_estate_office_1.jpeg'
import modernArchitectureBackground from './assets/modern_architecture_background.jpg'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState('ar')
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false)
  const { scrollY } = useScroll()
  
  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const textY = useTransform(scrollY, [0, 500], [0, 100])
  
  const t = translations[language]
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [isDark, language])

  const toggleTheme = () => setIsDark(!isDark)
  const toggleLanguage = () => setLanguage(language === 'ar' ? 'en' : 'ar')

  const handleAgentLogin = () => {
    setIsAgentModalOpen(true)
  }

  const handleUserLogin = () => {
    // Redirect to mobile app - you can replace this URL with your actual mobile app link
    const mobileAppUrl = 'https://your-mobile-app-url.com' // Replace with your actual mobile app URL
    window.open(mobileAppUrl, '_blank')
  }

  const services = [
    {
      icon: Building2,
      title: t.touristProperties,
      description: t.touristPropertiesDesc,
      image: touristProperty1
    },
    {
      icon: Home,
      title: t.residentialProperties,
      description: t.residentialPropertiesDesc,
      image: touristProperty2
    },
    {
      icon: Settings,
      title: t.propertyManagement,
      description: t.propertyManagementDesc,
      image: realEstateOffice1
    },
    {
      icon: MessageCircle,
      title: t.consultation,
      description: t.consultationDesc,
      image: modernArchitectureBackground
    }
  ]

  const topOffices = [
    {
      name: t.office1Name,
      description: t.office1Desc,
      rating: 4.9,
      image: realEstateOffice1
    },
    {
      name: t.office2Name,
      description: t.office2Desc,
      rating: 4.8,
      image: realEstateOffice1
    },
    {
      name: t.office3Name,
      description: t.office3Desc,
      rating: 4.7,
      image: realEstateOffice1
    },
    {
      name: t.office4Name,
      description: t.office4Desc,
      rating: 4.9,
      image: realEstateOffice1
    },
    {
      name: t.office5Name,
      description: t.office5Desc,
      rating: 4.8,
      image: realEstateOffice1
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Space */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold text-sky-600">
                [مساحة للشعار والاسم]
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <a 
                href="#home" 
                className="text-foreground hover:text-sky-600 transition-colors font-medium"
              >
                {t.navHome}
              </a>
              <a 
                href="#services" 
                className="text-foreground hover:text-sky-600 transition-colors font-medium"
              >
                {t.navServices}
              </a>
              <a 
                href="#offices" 
                className="text-foreground hover:text-sky-600 transition-colors font-medium"
              >
                {t.navOffices}
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-sky-600 transition-colors font-medium"
              >
                {t.navContact}
              </a>
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Button 
                variant="outline" 
                className="bg-sky-50 border-sky-200 text-sky-700 hover:bg-sky-100"
                onClick={handleAgentLogin}
              >
                {t.loginAsAgent}
              </Button>
              <Button 
                className="bg-sky-600 hover:bg-sky-700 flex items-center gap-2"
                onClick={handleUserLogin}
              >
                <Smartphone className="w-4 h-4" />
                {t.loginAsUser}
              </Button>
              
              {/* Theme Toggle */}
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              
              {/* Language Toggle */}
              <Button variant="ghost" size="icon" onClick={toggleLanguage}>
                <Globe className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t.heroSubtitle}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-lg px-8 py-6">
              {t.exploreProperties}
            </Button>
            <Button size="lg" variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50 text-lg px-8 py-6">
              {t.contactUs}
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-600">{t.servicesTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.servicesSubtitle}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-200">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-sky-700">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Offices Section */}
      <section id="offices" className="py-20 px-4 bg-sky-50/50 dark:bg-sky-950/20">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-600">{t.topOfficesTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.topOfficesSubtitle}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {topOffices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-200">
                  <div className="relative h-32 overflow-hidden rounded-t-lg">
                    <img 
                      src={office.image} 
                      alt={office.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-sky-600 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        {office.rating}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-sky-700">{office.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs">{office.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-sky-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">{t.footerTitle}</div>
              </div>
              <p className="text-sky-100 mb-6 max-w-md">{t.footerDesc}</p>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <Button size="icon" variant="ghost" className="text-sky-100 hover:text-white hover:bg-sky-800">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-sky-100 hover:text-white hover:bg-sky-800">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-sky-100 hover:text-white hover:bg-sky-800">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-sky-100 hover:text-white hover:bg-sky-800">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sky-100 hover:text-white transition-colors">{t.home}</a></li>
                <li><a href="#" className="text-sky-100 hover:text-white transition-colors">{t.services}</a></li>
                <li><a href="#" className="text-sky-100 hover:text-white transition-colors">{t.about}</a></li>
                <li><a href="#" className="text-sky-100 hover:text-white transition-colors">{t.contact}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Phone className="w-4 h-4" />
                  <span className="text-sky-100">+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Mail className="w-4 h-4" />
                  <span className="text-sky-100">info@realestate.com</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sky-100">123 Real Estate St.</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-sky-800 mt-12 pt-8 text-center">
            <p className="text-sky-100">© 2024 {t.footerTitle}. {t.allRightsReserved}</p>
          </div>
        </div>
      </footer>

      {/* Agent Registration Modal */}
      <AgentRegistrationModal
        isOpen={isAgentModalOpen}
        onClose={() => setIsAgentModalOpen(false)}
        translations={t}
        language={language}
      />
    </div>
  )
}

export default App

