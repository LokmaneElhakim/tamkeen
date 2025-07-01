import { StartupRegistrationForm } from "@/components/startup-registration-form"

export default function RegisterStartupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Register as Startup/Exhibitor</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Showcase your innovation and connect with talented youth
            </p>
          </div>
          <StartupRegistrationForm />
        </div>
      </div>
    </div>
  )
}
