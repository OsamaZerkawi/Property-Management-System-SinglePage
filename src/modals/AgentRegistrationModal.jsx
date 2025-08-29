import { useState } from "react";
import { registerSubscriber } from "../api/api_repo.jsx";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.jsx";
import { X, Upload, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Map } from "../components/Map.jsx";

const AgentRegistrationModal = ({
  isOpen,
  onClose,
  translations,
  language,
}) => {
  const [formData, setFormData] = useState({
    lat: 33.5138,
    lng: 36.2765,
    agentFirstName: "",
    agentLastName: "",
    agentType: "",
    email: "",
    document: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const t = translations;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.agentType) newErrors.agentType = t.pleaseSelectAgentType;
    if (!formData.agentFirstName.trim())
      newErrors.agentFirstName =
        language === "ar"
          ? "يرجى إدخال الاسم الأول"
          : "Please enter first name";
    if (!formData.agentLastName.trim())
      newErrors.agentLastName =
        language === "ar"
          ? "يرجى إدخال الاسم الأخير"
          : "Please enter last name";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = t.pleaseEnterValidEmail;
    if (!formData.document) newErrors.document = t.pleaseUploadDocument;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("first_name", formData.agentFirstName);
      data.append("last_name", formData.agentLastName);
      data.append("latitude", formData.lat);
      data.append("longitude", formData.lng);
      data.append("agent_type", formData.agentType);
      data.append("email", formData.email);
      if (formData.document) data.append("proof_document", formData.document);

      await registerSubscriber(data); // ✅ use API module

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          lat: 33.5138,
          lng: 36.2765,
          agentFirstName: "",
          agentLastName: "",
          agentType: "",
          email: "",
          document: null,
        });
        setErrors({});
        onClose();
      }, 3000);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, document: file });
      setErrors({ ...errors, document: "" });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <Card className="w-full">
            <CardHeader className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={onClose}
              >
                <X className="w-4 h-4" />
              </Button>
              <CardTitle className="text-2xl text-sky-600 text-center">
                {t.agentRegistration}
              </CardTitle>
              <CardDescription className="text-center">
                {language === "ar"
                  ? "املأ البيانات التالية لتسجيل حسابك كوسيط عقاري"
                  : "Fill in the following information to register as a real estate agent"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-600 mb-2">
                    {language === "ar"
                      ? "تم الإرسال بنجاح!"
                      : "Successfully Submitted!"}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.requestSubmittedSuccessfully}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Agent Type */}
                  <div className="space-y-2">
                    <Label htmlFor="agentType">{t.agentType}</Label>
                    <Select
                      value={formData.agentType}
                      onValueChange={(v) => handleInputChange("agentType", v)}
                    >
                      <SelectTrigger
                        className={errors.agentType ? "border-red-500" : ""}
                      >
                        <SelectValue placeholder={t.pleaseSelectAgentType} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="مكتب وسيط">{t.office}</SelectItem>
                        <SelectItem value="مزود خدمة">
                          {t.serviceProvider}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.agentType && (
                      <p className="text-sm text-red-500">{errors.agentType}</p>
                    )}
                  </div>

                  {/* Name Fields */}
                  <div className="space-y-2">
                    <Label htmlFor="agentFirstName">اسم الوسيط</Label>
                    <Input
                      id="agentFirstName"
                      value={formData.agentFirstName}
                      onChange={(e) =>
                        handleInputChange("agentFirstName", e.target.value)
                      }
                      className={errors.agentFirstName ? "border-red-500" : ""}
                      placeholder={
                        language === "ar"
                          ? "أدخل الاسم الأول"
                          : "Enter first name"
                      }
                    />
                    {errors.agentFirstName && (
                      <p className="text-sm text-red-500">
                        {errors.agentFirstName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="agentLastName">الكنية</Label>
                    <Input
                      id="agentLastName"
                      value={formData.agentLastName}
                      onChange={(e) =>
                        handleInputChange("agentLastName", e.target.value)
                      }
                      className={errors.agentLastName ? "border-red-500" : ""}
                      placeholder={
                        language === "ar"
                          ? "أدخل الاسم الأخير"
                          : "Enter last name"
                      }
                    />
                    {errors.agentLastName && (
                      <p className="text-sm text-red-500">
                        {errors.agentLastName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={errors.email ? "border-red-500" : ""}
                      placeholder={t.pleaseEnterValidEmail}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Location Button */}
                  <div>
                    <Button
                      type="button"
                      className="flex-1 bg-sky-600 hover:bg-sky-700"
                      onClick={() => setShowMap(true)}
                    >
                      تحديد الموقع
                    </Button>

                    {formData.lat && formData.lng && (
                      <p className="text-sm text-green-600 mt-2">
                        📍{" "}
                        {language === "ar"
                          ? "الموقع الحالي:"
                          : "Selected Location:"}
                        {` (${formData.lat.toFixed(5)}, ${formData.lng.toFixed(
                          5
                        )})`}
                      </p>
                    )}

                    {showMap && (
                      <Map
                        onClose={() => setShowMap(false)}
                        onSelect={(coordinates) => {
                          setFormData({
                            ...formData,
                            lat: coordinates.lat,
                            lng: coordinates.lng,
                          });
                          setShowMap(false);
                        }}
                        {...(formData.lat && formData.lng
                          ? {
                              center: { lat: formData.lat, lng: formData.lng },
                              markers: [
                                {
                                  location: {
                                    lat: formData.lat,
                                    lng: formData.lng,
                                  },
                                  name: "الموقع الحالي",
                                },
                              ],
                            }
                          : { zoom: 10 })}
                      />
                    )}
                  </div>

                  {/* Document Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="document">{t.proofDocument}</Label>
                    <div className="relative">
                      <Input
                        id="document"
                        type="file"
                        onChange={handleFileChange}
                        className={`${
                          errors.document ? "border-red-500" : ""
                        } file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100`}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                      <Upload className="absolute right-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                    {formData.document && (
                      <p className="text-sm text-green-600">
                        {language === "ar" ? "تم رفع الملف:" : "File uploaded:"}{" "}
                        {formData.document.name}
                      </p>
                    )}
                    {errors.document && (
                      <p className="text-sm text-red-500">{errors.document}</p>
                    )}
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      {t.cancel}
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-sky-600 hover:bg-sky-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? `${
                            language === "ar"
                              ? "جاري الإرسال..."
                              : "Submitting..."
                          }`
                        : t.submitRequest}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AgentRegistrationModal;
