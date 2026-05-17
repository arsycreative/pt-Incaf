import { HeroSection } from '@/components/home/HeroSection'
import { IntroSection } from '@/components/home/IntroSection'
import { ProductPillarsSection } from '@/components/home/ProductPillarsSection'
import { IndustriesSection } from '@/components/home/IndustriesSection'
import { AdvantagesSection } from '@/components/home/AdvantagesSection'
import { ProcessSection } from '@/components/home/ProcessSection'
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection'
import { TrustSection } from '@/components/home/TrustSection'
import { SuppliersSection } from '@/components/home/SuppliersSection'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ProductPillarsSection />
      <IndustriesSection />
      <AdvantagesSection />
      <ProcessSection />
      <FeaturedProductsSection />
      <SuppliersSection />
      <TrustSection />
      <CTASection />
    </>
  )
}
