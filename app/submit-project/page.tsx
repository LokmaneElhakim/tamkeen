import { ProjectSubmissionForm } from "@/components/project-submission-form"

export default function SubmitProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Submit Your Project</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Present your innovative solution and compete for recognition
            </p>
          </div>
          <ProjectSubmissionForm />
        </div>
      </div>
    </div>
  )
}
