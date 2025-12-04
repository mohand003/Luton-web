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
          <div className="relative w-full flex items-center justify-center" data-aos="fade-left" data-aos-once="true" data-aos-delay="300">
            <div ref={containerRef} className="relative w-full max-w-lg h-[500px] flex items-center justify-center overflow-visible">
              {/* Animated squares around images */}
              <AnimatedSquares containerRef={containerRef} />
              
              {/* Circular rotating images */}
              <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {images.map((src, index) => {
                    const initialAngle = (index * 360) / images.length
                    const radius = 160

                    return (
                      <div
                        key={index}
                        className="absolute"
                        style={{
                          left: '50%',
                          top: '50%',
                          marginLeft: '-90px',
                          marginTop: '-60px',
                          transform: `rotate(${initialAngle}deg) translateY(-${radius}px)`,
                          transformOrigin: 'center center',
                          animation: `rotate-image-around-center 30s linear infinite`,
                          animationFillMode: 'forwards',
                          '--start-angle': `${initialAngle}deg`
                        }}
                      >
                        <div 
                          className="rounded-lg overflow-hidden shadow-lg" 
                          style={{
                            width: '180px',
                            height: '120px',
                            animation: `counter-rotate-image 30s linear infinite`,
                            '--start-counter-angle': `-${initialAngle}deg`
                          }}
                        >
              <Image
                            src={src}
                            alt={`Hero image ${index + 1}`}
                            width={180}
                            height={120}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </section>
  )
}

