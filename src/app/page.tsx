import Header from "@/components/views/landing-page/Header"
import Hero from "@/components/views/landing-page/Hero"
import Causes from "@/components/views/landing-page/Causes"
import Trust from "@/components/views/landing-page/Trust"
import CampaignCTA from "@/components/views/landing-page/CampaignCTA"
import Testimonials from "@/components/views/landing-page/Testimonials"
import Partners from "@/components/views/landing-page/Partners"
import Footer from "@/components/views/landing-page/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f4f7f1]">
      <Header />
      <Hero />
      <Causes />
      <Trust />
      <CampaignCTA />
      <Testimonials />
      <Partners />
      <Footer />
    </div>
  )
}
