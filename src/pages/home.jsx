import './home.css'
import NavBar from '../components/nav-bar'
import Category from '../components/category'
import Hero from '../components/hero'
import DealsSection from '../components/deals-section'
import HomeOutdoorSection from '../components/homeoutdoor-section' 
import ConsumerelectronicSection from '../components/consumerelectronic-section'
import SupplierCtaSection from '../components/supplier-cta-section'
import RecommendedItemSection from '../components/recommended-item-section'
import SuppliersByRegionSection from '../components/suppliers-by-region-section'
import ExtraServicesSection from '../components/extra-services-section'
import NewsletterSubscribeSection from '../components/newsletter-subscribe-section'
import Footer from '../components/footer'
import FooterBottom from '../components/footer-bottom'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Category />
      <Hero />
      <DealsSection />
      <HomeOutdoorSection />
      <ConsumerelectronicSection />
       <SupplierCtaSection />
       <RecommendedItemSection />
        <ExtraServicesSection />
       <SuppliersByRegionSection />
       <NewsletterSubscribeSection />
        <Footer />
        <FooterBottom />
    </div>      
  );
}

export default App
