// Services.jsx
import { motion } from "framer-motion";
import { Building2, Home, Settings, MessageCircle } from "lucide-react";
import touristProperty1 from "@/assets/tourist_property_1.jpg";
import touristProperty2 from "@/assets/tourist_property_2.jpg";
import realEstateOffice1 from "@/assets/real_estate_office_1.jpeg";
import modernArchitectureBackground from "@/assets/modern_architecture_background.jpg";
import ServiceCard from "./ServiceCard";

function Services({ t }) {
  const services = [
    {
      icon: Building2,
      title: t.touristProperties,
      description: t.touristPropertiesDesc,
      image: touristProperty1,
    },
    {
      icon: Home,
      title: t.residentialProperties,
      description: t.residentialPropertiesDesc,
      image: touristProperty2,
    },
    {
      icon: Settings,
      title: t.propertyManagement,
      description: t.propertyManagementDesc,
      image: realEstateOffice1,
    },
    {
      icon: MessageCircle,
      title: t.consultation,
      description: t.consultationDesc,
      image: modernArchitectureBackground,
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sky-600">{t.servicesTitle}</h2>
          <p className="text-xl text-muted-foreground">{t.servicesSubtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
