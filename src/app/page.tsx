import Header from "@/components/common/header/Header";
import FAQ from "@/components/13_faq/FAQ";
import Features from "@/components/3_features/Features";
import Hero from "@/components/1_hero/Hero";
import Jumbo from "@/components/2_jumbo/Jumbo";
import HowItWorks from "@/components/4_how_it_works/HowItWorks";
import TrafficBenefit from "@/components/5_traffic_benefit/TrafficBenefit";
import Services from "@/components/6_services/Services";
import ServiceRange from "@/components/7_service_range/ServiceRange";
import Prising from "@/components/8_pricing/Prising";
import Testimonial from "@/components/9_testimonials/Testimonial";
import BuyingGuid from "@/components/10_buying_guid/BuyingGuid";
import MaximizeWebTraffic from "@/components/11_maximize_web_traffic/MaximizeWebTraffic";
import Opportunity from "@/components/12_opportunity/Opportunity";
import { ScrollToTopComp } from "@/components/common/scroll_to_top/ScrollToTop";
import Contact from "@/components/14_contact/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Jumbo />
      <Features />
      <HowItWorks />
      <TrafficBenefit />
      <Services />
      <ServiceRange />
      <Prising />
      <Testimonial />
      <BuyingGuid />
      <MaximizeWebTraffic />
      <Opportunity />
      <FAQ />
      <ScrollToTopComp />
      <Contact />
    </div>
  );
}
