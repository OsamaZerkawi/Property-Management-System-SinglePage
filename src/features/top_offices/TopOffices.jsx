import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Star, MapPin } from "lucide-react";
import { getPopularOffices } from "../../api/api_repo.jsx";

const TopOffices = ({ t }) => {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadOffices = async () => {
      try {
        const data = await getPopularOffices("مكتب");
        setOffices(data);
      } catch (err) {
        setError("Failed to load offices.");
      } finally {
        setLoading(false);
      }
    };
    loadOffices();
  }, []);

  if (loading) return <p>⏳ Loading top offices...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <section
      id="offices"
      className="py-20 px-4 bg-sky-50/50 dark:bg-sky-950/20"
    >
      <div className="container mx-auto">
        {/* Title & Subtitle */}
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sky-600">
            {t.topOfficesTitle}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.topOfficesSubtitle}
          </p>
        </motion.div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {offices.map((office) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-200">
                <div className="relative h-32 overflow-hidden rounded-t-lg">
                  <img
                    src={office.logo}
                    alt={office.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-sky-600 text-white">
                      <Star className="w-3 h-3 mr-1 fill-amber-300" />
                      {office.rate}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Badge
                      className={`text-xs ${
                        office.type === "عقاري"
                          ? "bg-[#C3DFED] text-[#1c7d8e]"
                          : office.type === "سياحي"
                          ? "bg-[#DCE1FF] text-[#3D468F]"
                          : "bg-[#FDE2DF] text-[#c32f27]"
                      }`}
                    >
                      {office.type}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-sky-700">
                    {office.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{office.location}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopOffices;
