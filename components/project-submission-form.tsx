"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle, Clock, AlertTriangle } from "lucide-react"

export function ProjectSubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false)
  const [formData, setFormData] = useState({
    projectName: "",
    teamName: "",
    description: "",
    problemStatement: "",
    solution: "",
    file: null as File | null,
  })

  // Set submission deadline (example: 7 days from now)
  const submissionDeadline = new Date()
  submissionDeadline.setDate(submissionDeadline.getDate() + 7)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const deadline = submissionDeadline.getTime()
      const difference = deadline - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setIsDeadlinePassed(true)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [submissionDeadline])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isDeadlinePassed) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Project submitted:", formData)

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, file }))
  }

  if (isDeadlinePassed) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Submissions Closed</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The project submission deadline has passed. Thank you for your interest!
            </p>
            <Button asChild className="w-full">
              <a href="/">Return to Home</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Project Submitted!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your project has been successfully submitted. Good luck!
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
    <div className="space-y-6">
      {/* Countdown Timer */}
      <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">Submission Deadline</h3>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-red-100 dark:bg-red-800 rounded p-2">
              <div className="text-2xl font-bold text-red-800 dark:text-red-200">{timeLeft.days}</div>
              <div className="text-xs text-red-600 dark:text-red-300">Days</div>
            </div>
            <div className="bg-red-100 dark:bg-red-800 rounded p-2">
              <div className="text-2xl font-bold text-red-800 dark:text-red-200">{timeLeft.hours}</div>
              <div className="text-xs text-red-600 dark:text-red-300">Hours</div>
            </div>
            <div className="bg-red-100 dark:bg-red-800 rounded p-2">
              <div className="text-2xl font-bold text-red-800 dark:text-red-200">{timeLeft.minutes}</div>
              <div className="text-xs text-red-600 dark:text-red-300">Minutes</div>
            </div>
            <div className="bg-red-100 dark:bg-red-800 rounded p-2">
              <div className="text-2xl font-bold text-red-800 dark:text-red-200">{timeLeft.seconds}</div>
              <div className="text-xs text-red-600 dark:text-red-300">Seconds</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submission Form */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Project Submission</CardTitle>
          <CardDescription>Submit your innovative project for evaluation and potential showcase</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="projectName">Project Name *</Label>
                <Input
                  id="projectName"
                  type="text"
                  required
                  value={formData.projectName}
                  onChange={(e) => handleInputChange("projectName", e.target.value)}
                  placeholder="Enter your project name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamName">Team Name *</Label>
                <Input
                  id="teamName"
                  type="text"
                  required
                  value={formData.teamName}
                  onChange={(e) => handleInputChange("teamName", e.target.value)}
                  placeholder="Enter your team name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                required
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Provide a brief overview of your project"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="problemStatement">Problem Statement *</Label>
              <Textarea
                id="problemStatement"
                required
                value={formData.problemStatement}
                onChange={(e) => handleInputChange("problemStatement", e.target.value)}
                placeholder="What problem does your project solve?"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="solution">Proposed Solution *</Label>
              <Textarea
                id="solution"
                required
                value={formData.solution}
                onChange={(e) => handleInputChange("solution", e.target.value)}
                placeholder="How does your project solve the identified problem?"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Project File (PDF/Presentation) *</Label>
              <Input
                id="file"
                type="file"
                required
                accept=".pdf,.ppt,.pptx"
                onChange={handleFileChange}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="text-sm text-gray-500">
                Upload your project presentation or documentation (PDF, PPT, PPTX - Max 10MB)
              </p>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting || isDeadlinePassed}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Project"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
