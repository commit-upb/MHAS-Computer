import Hero from '../components/sections/Hero'
import AboutPreview from '../components/sections/AboutPreview'
import ProductCategories from '../components/sections/ProductCategories'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import ServicesPreview from '../components/sections/ServicesPreview'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import BrandShowcase from '../components/sections/BrandShowcase'
import Testimonials from '../components/sections/Testimonials'
import PromoBanner from '../components/sections/PromoBanner'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <ProductCategories />
      <FeaturedProducts />
      <ServicesPreview />
      <WhyChooseUs />
      <BrandShowcase />
      <Testimonials />
      <PromoBanner />
      <CTA />
    </div>
  )
}
