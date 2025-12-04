import Section from '../base/Section'
import ListItem from '../landing/ListItem'
import Image from 'next/image'
import AnimatedSquares from '../base/AnimatedSquares'
import { useRef } from 'react'

export default function WhoWeHelpSection() {
  const imageContainerRef = useRef(null)
  return (
    <section id="who-we-help" className="w-full py-16 section-bg-light">
      <Section>
        {/* Left Side - Image */}
        <div className="col-span-12 lg:col-span-6 px-4 lg:pr-8 mt-8 lg:mt-0 flex items-center justify-center lg:justify-start">
          <div data-aos="fade-right" className="relative w-full max-w-lg">
            <div ref={imageContainerRef} className="relative w-full rounded-lg overflow-visible min-h-[300px] p-6">
              <AnimatedSquares containerRef={imageContainerRef} />
              <div className="relative z-10 rounded-lg overflow-hidden" style={{ width: '85%', margin: '0 auto' }}>
                <Image 
                  src="/assets/img/transmission+lines-1920w.webp" 
                  className="w-full h-auto object-contain" 
                  alt="Transmission lines - Businesses we support in Ghana" 
                  width={1920} 
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="col-span-12 lg:col-span-6 px-4 lg:pl-8 mt-12 lg:mt-0 flex items-center">
          <div data-aos="fade-left" className="space-y-7 w-full">
            <h2 className="text-gray-800" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '36px',
              fontWeight: 600,
              lineHeight: '40px'
            }}>
              Businesses we support in <span style={{ color: '#FC5012' }}>Ghana</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl" style={{ fontWeight: 400, lineHeight: 1.6 }}>
              We work with various industries across Ghana, helping them streamline operations and improve efficiency.
            </p>
            <ul className="space-y-2 text-left list-none" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px'
            }}>
              <ListItem title="Construction & engineering companies" />
              <ListItem title="Power & utilities" />
              <ListItem title="Warehousing & logistics" />
              <ListItem title="Manufacturing & assembly" />
              <ListItem title="Distributors and wholesalers" />
            </ul>
            <p style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22.75px',
              marginTop: '8px'
            }}>
              If you manage stock, equipment, or approvals — we can help.
            </p>
          </div>
        </div>
      </Section>
    </section>
  )
}

