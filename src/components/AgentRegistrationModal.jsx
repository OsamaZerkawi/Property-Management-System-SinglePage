import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { X, Upload, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const AgentRegistrationModal = ({ isOpen, onClose, translations, language }) => {
  const [formData, setFormData] = useState({
    agentType: '',
    agentName: '',
    location: '',
    email: '',
    document: null
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const t = translations

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.agentType) {
      newErrors.agentType = t.pleaseSelectAgentType
    }
    if (!formData.agentName.trim()) {
      newErrors.agentName = t.pleaseEnterAgentName
    }
    if (!formData.location.trim()) {
      newErrors.location = t.pleaseEnterLocation
    }
    if (!formData.email.trim()) {
      newErrors.email = t.pleaseEnterValidEmail
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.pleaseEnterValidEmail
    }
    if (!formData.document) {
      newErrors.document = t.pleaseUploadDocument
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          agentType: '',
          agentName: '',
          location: '',
          email: '',
          document: null
        })
        setErrors({})
        onClose()
      }, 3000)
    }, 2000)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({ ...formData, document: file })
      setErrors({ ...errors, document: '' })
    }
  }

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' })
    }
  }

  if (!isOpen) return null

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
                {language === 'ar' 
                  ? 'املأ البيانات التالية لتسجيل حسابك كوسيط عقاري'
                  : 'Fill in the following information to register as a real estate agent'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-600 mb-2">
                    {language === 'ar' ? 'تم الإرسال بنجاح!' : 'Successfully Submitted!'}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.requestSubmittedSuccessfully}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Agent Type */}
                  <div className="space-y-2">
                    <Label htmlFor="agentType">{t.agentType}</Label>
                    <Select
                      value={formData.agentType}
                      onValueChange={(value) => handleInputChange('agentType', value)}
                    >
                      <SelectTrigger className={errors.agentType ? 'border-red-500' : ''}>
                        <SelectValue placeholder={t.pleaseSelectAgentType} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="office">{t.office}</SelectItem>
                        <SelectItem value="serviceProvider">{t.serviceProvider}</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.agentType && (
                      <p className="text-sm text-red-500">{errors.agentType}</p>
                    )}
                  </div>

                  {/* Agent Name */}
                  <div className="space-y-2">
                    <Label htmlFor="agentName">{t.agentName}</Label>
                    <Input
                      id="agentName"
                      type="text"
                      value={formData.agentName}
                      onChange={(e) => handleInputChange('agentName', e.target.value)}
                      className={errors.agentName ? 'border-red-500' : ''}
                      placeholder={t.pleaseEnterAgentName}
                    />
                    {errors.agentName && (
                      <p className="text-sm text-red-500">{errors.agentName}</p>
                    )}
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">{t.location}</Label>
                    <Input
                      id="location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className={errors.location ? 'border-red-500' : ''}
                      placeholder={t.pleaseEnterLocation}
                    />
                    {errors.location && (
                      <p className="text-sm text-red-500">{errors.location}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={errors.email ? 'border-red-500' : ''}
                      placeholder={t.pleaseEnterValidEmail}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
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
                        className={`${errors.document ? 'border-red-500' : ''} file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100`}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                      <Upload className="absolute right-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                    {formData.document && (
                      <p className="text-sm text-green-600">
                        {language === 'ar' ? 'تم رفع الملف:' : 'File uploaded:'} {formData.document.name}
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
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          {language === 'ar' ? 'جاري الإرسال...' : 'Submitting...'}
                        </div>
                      ) : (
                        t.submitRequest
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AgentRegistrationModal

