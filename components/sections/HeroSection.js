import Section from '../base/Section'
import Button from '../base/Button'
import Image from 'next/image'
import AnimatedSquares from '../base/AnimatedSquares'
import { useRef } from 'react'

export default function HeroSection({ onBookCall, onSeeHowItWorks }) {
  const containerRef = useRef(null)

  // Images array - 5 images rotating in circle
  const images = [
    '/assets/img/transmission-lines-feature-1920w.jpg',
    '/assets/img/parallax+1-1920w.JPG',
    '/assets/img/slide03-2304w.JPG',
    '/assets/img/slide05-2304w.jpg',
    '/assets/img/slide06-2304w.jpg'
  ]


  return (
    <section id="hero" className="w-full py-12 lg:py-16 section-bg-light hero-bg-extended">
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
              className="max-w-full px-6 py-4 bg-inherit text-gradient flex items-center justify-center cursor-pointer border-2 border-primary"
              style={{ 
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                outline: 'none'
              }}
            >
              See How Our System Works
            </Button>
          </div>
          <p data-aos="fade-up" data-aos-once="true" data-aos-delay="900" className="text-sm sm:text-base text-accent mt-4" style={{ fontWeight: 400 }}>
            No pressure. We listen first, then show you the right solution.
          </p>
        </div>
        <div className="hidden sm:block col-span-12 lg:col-span-6">
          <div className="relative w-full flex items-center justify-center" data-aos="fade-left" data-aos-once="true" data-aos-delay="300">
            <div ref={containerRef} className="relative w-full max-w-lg h-[500px] flex items-center justify-center overflow-visible">
              {/* Animated squares around images */}
              <AnimatedSquares containerRef={containerRef} />
              
              {/* Static vertical rectangles side by side with different levels */}
              <div className="relative z-10 w-full max-w-2xl flex flex-row gap-[15px] items-center">
                {images.slice(0, 3).map((src, index) => {
                  // First image: up, second: down, third: up
                  const translateY = index === 0 ? '-30px' : index === 1 ? '30px' : '-30px'
                  
                  return (
                    <div
                      key={index}
                      className="relative rounded-xl overflow-hidden bg-white flex-1"
                      style={{
                        aspectRatio: '6/16',
                        minHeight: '400px',
                        transform: `translateY(${translateY})`,
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      <Image
                        src={src}
                        alt={`Hero image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </section>
  )
}

