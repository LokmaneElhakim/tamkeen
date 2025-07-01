import { Hero } from "@/components/hero"
import { EventHighlights } from "@/components/event-highlights"
import CountdownSection  from "@/components/countdown-section"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CountdownSection />
      <EventHighlights />
      <CallToAction />
    </div>
  )
}
