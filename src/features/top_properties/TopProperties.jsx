import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Star, MapPin } from "lucide-react";
import realEstateOffice from "@/assets/real_estate_office_1.jpeg";
import modernArchitecture from "@/assets/modern_architecture_background.jpg";
import touristProperty1 from "@/assets/tourist_property_1.jpg";
import touristProperty2 from "@/assets/tourist_property_2.jpg";

const TopProperties = ({ t }) => {
  // Sample data: this site has no backend
  const properties = [
    {
      propertyId: 1,
      postImage: touristProperty1,
      postTitle: t.property1Title,
      rate: 4.9,
      type: "tourism",
      listing_type: t.forRent,
      location: t.latakia,
      price: "120",
      rental_period: t.perNight,
      postDate: "2026-10-12",
    },
    {
      propertyId: 2,
      postImage: touristProperty2,
      postTitle: t.property2Title,
      rate: 4.8,
      type: "tourism",
      listing_type: t.forRent,
      location: t.tartus,
      price: "95",
      rental_period: t.perNight,
      postDate: "2026-10-05",
    },
    {
      propertyId: 3,
      postImage: modernArchitecture,
      postTitle: t.property3Title,
      rate: 4.7,
      type: "realEstate",
      listing_type: t.forSale,
      location: t.damascus,
      price: "250,000",
      postDate: "2026-09-28",
    },
    {
      propertyId: 4,
      postImage: realEstateOffice,
      postTitle: t.property4Title,
      rate: 4.6,
      type: "realEstate",
      listing_type: t.forRent,
      location: t.aleppo,
      price: "800",
      rental_period: t.perMonth,
      postDate: "2026-09-20",
    },
  ];

  return (
    <section
      id="properties"
      className="py-20 px-4 bg-sky-50/50 dark:bg-sky-950/20"
    >
      <div className="container mx-auto">
        {/* Title */}
        <motion.div className="text-center mb-16">
          {t?.topPropertiesTitle && (
            <h2 className="text-4xl font-bold text-sky-600">
              {t.topPropertiesTitle}
            </h2>
          )}
          {t?.topPropertiesSubtitle && (
            <p className="text-xl text-muted-foreground">
              {t.topPropertiesSubtitle}
            </p>
          )}
        </motion.div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <motion.div
              key={property.propertyId}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-200">
                {/* Image */}
                {property.postImage && (
                  <div className="relative h-40 overflow-hidden rounded-t-lg">
                    <img
                      src={property.postImage}
                      alt={property.postTitle || "Property"}
                      className="w-full h-full object-cover"
                    />

                    {/* Rating */}
                    {property.rate && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-sky-600 text-white flex items-center gap-1">
                          <Star className="w-3 h-3 mr-1 fill-amber-300" />
                          {property.rate}
                        </Badge>
                      </div>
                    )}

                    {/* Type Badge */}
                    {property.type && (
                      <div className="absolute bottom-2 left-2">
                        <Badge
                          className={`text-xs ${
                            property.type === "tourism"
                              ? "bg-[#DCE1FF] text-[#3D468F]"
                              : "bg-[#C3DFED] text-[#1c7d8e]"
                          }`}
                        >
                          {property.type === "tourism"
                            ? t.typeTourism
                            : t.typeRealEstate}
                          {property.listing_type &&
                            ` - ${property.listing_type}`}
                        </Badge>
                      </div>
                    )}
                  </div>
                )}

                {/* Title */}
                {property.postTitle && (
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-sky-700 line-clamp-1">
                      {property.postTitle}
                    </CardTitle>
                  </CardHeader>
                )}

                {/* Info */}
                <CardContent>
                  {property.location && (
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{property.location}</span>
                    </div>
                  )}

                  {property.price && (
                    <p className="text-sm text-gray-500 mt-2">
                      💰 {property.price} {t?.currency || ""}
                      {property.rental_period && (
                        <span> / {property.rental_period}</span>
                      )}
                    </p>
                  )}

                  {property.postDate && (
                    <p className="text-xs text-gray-400 mt-1">
                      📅 {property.postDate}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProperties;
