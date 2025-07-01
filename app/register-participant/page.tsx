import { ParticipantRegistrationForm } from "@/components/participant-registration-form"

export default function RegisterParticipantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Register as Participant</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join hundreds of young Algerians in this transformative experience
            </p>
          </div>
          <ParticipantRegistrationForm />
        </div>
      </div>
    </div>
  )
}
