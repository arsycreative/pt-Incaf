import { PageHeader } from '@/components/ui/PageHeader'
import { CompanyStory } from '@/components/about/CompanyStory'
import { VisionMission } from '@/components/about/VisionMission'
import { WhyChooseUs } from '@/components/about/WhyChooseUs'
import { BusinessPillars } from '@/components/about/BusinessPillars'
import { Legalities } from '@/components/about/Legalities'

export const metadata = {
  title: 'Tentang Kami — PT. Incaf Nutri Solusindo',
  description: 'Lebih dari sekadar supplier — kami adalah mitra bisnis jangka panjang Anda untuk kebutuhan speciality chemical di Indonesia.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="Tentang PT. Incaf Nutri Solusindo"
        subtitle="Lebih dari sekadar supplier — kami adalah mitra bisnis jangka panjang Anda."
        breadcrumbCurrent="Tentang Kami"
        imageSrc="/about-hero-warehouse.png"
        waveColor="text-white"
      />
      <CompanyStory />
      <VisionMission />
      <WhyChooseUs />
      <BusinessPillars />
      <Legalities />
    </>
  )
}
