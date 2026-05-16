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
        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
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
