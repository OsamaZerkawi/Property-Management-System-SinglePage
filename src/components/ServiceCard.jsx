// ServiceCard.jsx
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

function ServiceCard({ icon: Icon, title, description, image, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <Card className="h-full hover:shadow-xl transition-all">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition"
          />
          <div className="absolute bottom-4 left-4">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
export default ServiceCard;
