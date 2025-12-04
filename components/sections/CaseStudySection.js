import Section from '../base/Section'
import Button from '../base/Button'
import AnimatedSquares from '../base/AnimatedSquares'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { useRef } from 'react'

export default function CaseStudySection({ onBookCall, onSeeHowItWorks }) {
  const imageContainerRef = useRef(null)
  return (
    <section id="case-study" className="w-full py-16 section-bg-light">
      <Section>
        <div className="col-span-12 lg:col-span-6 px-4 lg:pr-8 mt-8 lg:mt-0 flex items-center">
          <div data-aos="fade-right" className="space-y-3 w-full">
            {/* Main Heading */}
            <h2 className="text-neutral-800" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '36px',
              fontWeight: 600,
              lineHeight: '40px'
            }}>
              We tried it on ourselves first — <span style={{ color: '#FC5012' }}>and it works</span>
            </h2>
            
            {/* Sub-section 1 */}
            <div className="space-y-2">
              <h3 className="text-neutral-800 flex items-center space-x-3" style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '28px'
              }}>
                <IoCheckmarkCircle size={24} className="text-primary flex-shrink-0" />
                <span>Control Over Stock</span>
              </h3>
              <p className="text-neutral-600" style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '22.75px'
              }}>
                Luton Engineering delivers projects for public and private sector clients, with 100+ employees and eight warehouses. We needed control over stock in, stock out, and what was issued to projects.
              </p>
            </div>
            
            {/* Sub-section 2 */}
            <div className="space-y-2">
              <h3 className="text-neutral-800 flex items-center space-x-3" style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '28px'
              }}>
                <IoCheckmarkCircle size={24} className="text-primary flex-shrink-0" />
                <span>Decisions Driven by Data</span>
              </h3>
              <p className="text-neutral-600" style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '22.75px'
              }}>
                Once every item passed through our inventory system, we could trust the numbers. Real-time dashboards, KPIs and reports helped us cut waste, control costs, and make better decisions faster.
              </p>
            </div>
            
            {/* Sub-section 3 */}
            <div className="space-y-2">
              <h3 className="text-neutral-800 flex items-center space-x-3" style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '28px'
              }}>
                <IoCheckmarkCircle size={24} className="text-primary flex-shrink-0" />
                <span>Expanding Into ERP</span>
              </h3>
              <p className="text-neutral-600" style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '22.75px'
              }}>
                After fixing inventory, we moved to a phased ERP rollout, starting with our metering projects and then expanding into finance, purchasing and other parts of the business step by step.
              </p>
            </div>

            {/* Closing Text */}
            <p className="text-neutral-600 mt-4" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22.75px'
            }}>
              It's still work in progress. Let us help you start the journey.
            </p>

            {/* Button */}
            <div className="mt-4">
              <Button 
                onClick={onBookCall}
                className="max-w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white cursor-pointer"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
        
        {/* Right Side - Image */}
        <div className="col-span-12 lg:col-span-6 px-4 lg:pl-8 mt-12 lg:mt-0 flex items-center">
          <div data-aos="fade-left" className="relative w-full flex items-center justify-center">
            <div ref={imageContainerRef} className="relative w-full rounded-lg overflow-visible min-h-[300px] p-6" style={{ backgroundColor: '#F5F5F5' }}>
              <AnimatedSquares containerRef={imageContainerRef} />
              <div className="relative z-10 rounded-lg overflow-hidden" style={{ width: '85%', margin: '0 auto' }}>
                <img 
                  src="/assets/img/myabcm_myabcm_image_473-scaled-2.jpeg" 
                  alt="We tried it on ourselves first — and it works"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </section>
  )
}

