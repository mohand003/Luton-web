import Head from 'next/head'
import Layout from '../components/Layout'
import HeroSection from '../components/sections/HeroSection'
import TrustSection from '../components/sections/TrustSection'
import ProblemsSection from '../components/sections/ProblemsSection'
import CaseStudySection from '../components/sections/CaseStudySection'
import ServicesSection from '../components/sections/ServicesSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
import HowWeWorkSection from '../components/sections/HowWeWorkSection'
import WhoWeHelpSection from '../components/sections/WhoWeHelpSection'
import FAQSection from '../components/sections/FAQSection'
import ContactSection from '../components/sections/ContactSection'
import ScrollToTopSection from '../components/sections/ScrollToTopSection'

export default function Home() {
  const handleBookCall = () => {
    window.location.href = '#contact'
  }

  const handleSeeHowItWorks = () => {
    window.location.href = '#how-we-work'
  }

  return (
    <>
      <Head>
        <title>Luton IT Services - UK-level systems for Ghana</title>
        <meta name="description" content="UK-level systems, proven inside Luton Engineering, now built for Ghana. Simple, practical, and low-cost to start." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Layout>
        <div className="w-full">
          <HeroSection 
            onBookCall={handleBookCall}
            onSeeHowItWorks={handleSeeHowItWorks}
          />
          <TrustSection />
          <ProblemsSection onBookCall={handleBookCall} />
          <CaseStudySection 
            onBookCall={handleBookCall}
            onSeeHowItWorks={handleSeeHowItWorks}
          />
          <ServicesSection />
          <WhyChooseUsSection />
          <HowWeWorkSection />
          <WhoWeHelpSection />
          <FAQSection />
          <ContactSection />
          <ScrollToTopSection />
        </div>
      </Layout>
      <style jsx>{`
        .text-header-gradient {
          background: linear-gradient(136.91deg, #FC5012 -12.5%, #D43E0F 107.5%);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        @keyframes rotate-box-1 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -20px) rotate(90deg);
          }
          50% {
            transform: translate(40px, 0) rotate(180deg);
          }
          75% {
            transform: translate(20px, 20px) rotate(270deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }
        
        @keyframes rotate-box-2 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-20px, 20px) rotate(-90deg);
          }
          50% {
            transform: translate(-40px, 0) rotate(-180deg);
          }
          75% {
            transform: translate(-20px, -20px) rotate(-270deg);
          }
          100% {
            transform: translate(0, 0) rotate(-360deg);
          }
        }
        
        @keyframes rotate-box-3 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -15px) rotate(120deg);
          }
          66% {
            transform: translate(-15px, -30px) rotate(240deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }
        
        @keyframes rotate-box-4 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-30px, 15px) rotate(-120deg);
          }
          66% {
            transform: translate(15px, 30px) rotate(-240deg);
          }
          100% {
            transform: translate(0, 0) rotate(-360deg);
          }
        }
        
        .animate-rotate-box-1 {
          animation: rotate-box-1 8s ease-in-out infinite;
        }
        
        .animate-rotate-box-2 {
          animation: rotate-box-2 10s ease-in-out infinite;
        }
        
        .animate-rotate-box-3 {
          animation: rotate-box-3 12s ease-in-out infinite;
        }
        
        .animate-rotate-box-4 {
          animation: rotate-box-4 9s ease-in-out infinite;
        }
        
        @keyframes rotate-image-around-center {
          0% {
            transform: rotate(calc(var(--start-angle, 0deg))) translateY(-160px);
          }
          100% {
            transform: rotate(calc(var(--start-angle, 0deg) + 360deg)) translateY(-160px);
          }
        }
        
        @keyframes counter-rotate-image {
          0% {
            transform: rotate(calc(var(--start-counter-angle, 0deg)));
          }
          100% {
            transform: rotate(calc(var(--start-counter-angle, 0deg) - 360deg));
          }
        }
      `}</style>
    </>
  )
}
