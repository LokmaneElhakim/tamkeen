import Hero from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { TracksSection } from "@/components/tracks-section"
import { TimelineSection } from "@/components/timeline-section"
import { SpeakersSection } from "@/components/speakers-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <StatsSection />
      <TracksSection />
      <TimelineSection />
      <SpeakersSection />
      <SponsorsSection />
      <CallToAction />
    </div>
  )
}
