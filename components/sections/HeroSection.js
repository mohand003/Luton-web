import Section from '../base/Section'
import Button from '../base/Button'
import Image from 'next/image'

export default function HeroSection({ onBookCall, onSeeHowItWorks }) {
  return (
    <section id="hero" className="w-full py-16 section-bg-light hero-bg-extended">
      <Section>
        <div className="col-span-12 lg:col-span-6 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <p
            data-aos="fade-right"
            data-aos-once="true"
            className="sm:pr-8 xl:pr-10 hero-orange-text"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '24px',
              textTransform: 'uppercase',
              color: '#FC5012'
            }}
          >
            Built For Growth
          </p>
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            className="sm:pr-8 xl:pr-10"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '48px'
            }}
          >
            UK Expertise, <span style={{ color: '#FC5012' }}>Delivered for</span> Businesses in Ghana
          </h1>
          <p 
            data-aos="fade-down" 
            data-aos-once="true" 
            data-aos-delay="300" 
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '26px'
            }}
          >
            Built and proven inside Luton Engineering, our systems help businesses cut costs and improve operations with simple, reliable digital tools.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <Button 
              onClick={onBookCall}
              className="max-w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white cursor-pointer"
            >
              Book a Free Call
            </Button>
            <Button 
              onClick={onSeeHowItWorks}
              className="max-w-full px-6 py-4 bg-inherit text-gradient border border-primary flex items-center justify-center cursor-pointer"
            >
              See How Our System Works
            </Button>
          </div>
          <p data-aos="fade-up" data-aos-once="true" data-aos-delay="900" className="text-sm sm:text-base text-accent mt-4" style={{ fontWeight: 400 }}>
            No pressure. We listen first, then show you the right solution.
          </p>
        </div>
        <div className="hidden sm:block col-span-12 lg:col-span-6">
          <div className="relative w-full flex items-center justify-center " data-aos="fade-left" data-aos-once="true" data-aos-delay="300">
            <div className="relative w-full max-w-lg">
              <Image
                src="/assets/img/transmission-lines-feature-1920w.jpg"
                className="rounded-2xl object-cover w-full h-auto relative z-10"
                alt="Luton IT Services"
                width={800}
                height={600}
              />
              {/* Animated boxes rotating around the image */}
              <div className="absolute inset-0 -z-0">
                <div className="absolute top-0 left-0 w-16 h-16 bg-primary/20 rounded-lg animate-rotate-box-1"></div>
                <div className="absolute top-1/4 right-0 w-12 h-12 bg-primary/30 rounded-lg animate-rotate-box-2"></div>
                <div className="absolute bottom-1/4 left-0 w-14 h-14 bg-primary/25 rounded-lg animate-rotate-box-3"></div>
                <div className="absolute bottom-0 right-1/4 w-10 h-10 bg-primary/20 rounded-lg animate-rotate-box-4"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </section>
  )
}

