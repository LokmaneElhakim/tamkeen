"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle } from "lucide-react"

export function StartupRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    activityType: "",
    description: "",
    website: "",
    socialLinks: "",
    boothNeeds: {
      electricity: false,
      table: false,
      internet: false,
      display: false,
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Startup registration submitted:", formData)

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleBoothNeedChange = (need: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      boothNeeds: { ...prev.boothNeeds, [need]: checked },
    }))
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Registration Successful!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We'll contact you soon with booth details and setup instructions.
            </p>
            <Button asChild className="w-full">
              <a href="/">Return to Home</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Startup/Exhibitor Registration</CardTitle>
        <CardDescription>Register your startup or business to showcase at our event</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="companyName">Company/Startup Name *</Label>
            <Input
              id="companyName"
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              placeholder="Enter your company name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactName">Contact Person *</Label>
            <Input
              id="contactName"
              type="text"
              required
              value={formData.contactName}
              onChange={(e) => handleInputChange("contactName", e.target.value)}
              placeholder="Enter contact person name"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="contact@company.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+213 XXX XXX XXX"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="activityType">Type of Activity *</Label>
            <Select onValueChange={(value) => handleInputChange("activityType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech-startup">Tech Startup</SelectItem>
                <SelectItem value="e-commerce">E-commerce</SelectItem>
                <SelectItem value="fintech">Fintech</SelectItem>
                <SelectItem value="healthtech">HealthTech</SelectItem>
                <SelectItem value="edtech">EdTech</SelectItem>
                <SelectItem value="social-enterprise">Social Enterprise</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Business Description *</Label>
            <Textarea
              id="description"
              required
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Describe your product/service and what problem it solves"
              rows={4}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="socialLinks">Social Media Links</Label>
              <Input
                id="socialLinks"
                type="text"
                value={formData.socialLinks}
                onChange={(e) => handleInputChange("socialLinks", e.target.value)}
                placeholder="Instagram, LinkedIn, etc."
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label>Booth Requirements</Label>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries({
                electricity: "Electricity",
                table: "Table & Chairs",
                internet: "Internet Access",
                display: "Display Screen",
              }).map(([key, label]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={formData.boothNeeds[key as keyof typeof formData.boothNeeds]}
                    onCheckedChange={(checked) => handleBoothNeedChange(key, checked as boolean)}
                  />
                  <Label htmlFor={key} className="text-sm">
                    {label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Registering...
              </>
            ) : (
              "Register Startup"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
