import Section from '../base/Section'
import { IoCheckmarkCircle } from 'react-icons/io5'
import AnimatedSquares from '../base/AnimatedSquares'
import { useRef } from 'react'

export default function ProblemsSection({ onBookCall }) {
  const imageContainerRef = useRef(null)
  return (
    <section id="problems" className="w-full py-12 lg:py-16 bg-white">
      <Section>
        <div className="hidden lg:block col-span-12 lg:col-span-6 px-4 lg:pr-8">
          {/* Left Side - Image */}
          <div data-aos="fade-right" className="relative flex items-center justify-center lg:justify-start h-full">
            <div ref={imageContainerRef} className="relative w-full max-w-full rounded-lg overflow-visible bg-white min-h-[300px] p-6">
              <AnimatedSquares containerRef={imageContainerRef} />
              <div className="relative z-10 rounded-lg overflow-hidden" style={{ width: '85%', margin: '0 auto' }}>
                <img 
                  src="/assets/img/AdobeStock_459155812-scaled-3.jpeg" 
                  alt="Warehouse inventory management" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="col-span-12 lg:col-span-6 px-4 lg:pl-8 lg:mt-0 flex items-center">
          <div data-aos="fade-left" className="space-y-4 w-full">
            <h2 className="text-neutral-800" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '36px',
              fontWeight: 600,
              lineHeight: '40px'
            }}>
              The everyday <span style={{ color: '#FC5012' }}>problems</span> Ghanaian businesses face
            </h2>
            
            <p className="text-neutral-600" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '26px'
            }}>
              Luton Engineering faced the same challenges most organisations struggle with. As you grow, these issues start to show up everywhere:
            </p>
            
            <div className="space-y-1.5 sm:space-y-2 mt-4">
              <div className="flex items-center space-x-3">
                <IoCheckmarkCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-neutral-800" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px'
                }}>Too much manual paperwork</span>
              </div>
              <div className="flex items-center space-x-3">
                <IoCheckmarkCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-neutral-800" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px'
                }}>Stock going missing or hard to track</span>
              </div>
              <div className="flex items-center space-x-3">
                <IoCheckmarkCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-neutral-800" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px'
                }}>Approvals take too long</span>
              </div>
              <div className="flex items-center space-x-3">
                <IoCheckmarkCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-neutral-800" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px'
                }}>Decisions made without reliable data</span>
              </div>
              <div className="flex items-center space-x-3">
                <IoCheckmarkCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-neutral-800" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px'
                }}>Dependence on "one key person" for everything</span>
              </div>
            </div>
            
            <p style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22.75px',
              marginTop: '8px'
            }}>
              We spent 4+ years solving these problems inside Luton Engineering. Now we help other businesses do the same.
            </p>
          </div>
        </div>
      </Section>
    </section>
  )
}

