import { useEffect, useRef, useState } from 'react'
import Section from '../base/Section'
import Image from 'next/image'

export default function TrustSection() {
  const trustBoxRef = useRef(null)
  const [bgHeight, setBgHeight] = useState(0)

  useEffect(() => {
    const updateBgHeight = () => {
      if (trustBoxRef.current) {
        const boxHeight = trustBoxRef.current.offsetHeight
        setBgHeight(boxHeight / 2)
      }
    }

    updateBgHeight()
    window.addEventListener('resize', updateBgHeight)
    return () => window.removeEventListener('resize', updateBgHeight)
  }, [])

  return (
    <>
      <section id="trust" className="w-full relative pt-16 pb-12 section-bg-light trust-section-partial">
        <Section>
          <div className="col-span-12 relative pb-4 z-10 flex justify-center">
            <div className="trust-box-container relative">
              {bgHeight > 0 && (
                <div 
                  className="trust-box-bg"
                  style={{ height: `${bgHeight}px` }}
                ></div>
              )}
              <div 
                ref={trustBoxRef}
                className="trust-box bg-white rounded-2xl shadow-lg p-8 relative z-10 transition-all duration-300 hover:bg-gray-50"
              >
              <div className="text-center space-y-6">
                {/* Title */}
                <h2 data-aos="fade-up" className="text-neutral-800" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '32px'
                }}>
                  Built by People with <span style={{ color: '#FC5012' }}>Global Experience</span>
                </h2>
                
                {/* Description */}
                <p data-aos="fade-up" data-aos-delay="150" className="text-neutral-500 max-w-2xl mx-auto" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '26px'
                }}>
                  Our specialists have contributed to complex digital programmes for top-tier organisations, bringing that expertise into every project we deliver.
                </p>
                
                {/* Logos below */}
                <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 mt-6">
                  {/* Barclays */}
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/img/Barclays.png"
                      alt="Barclays"
                      width={150}
                      height={80}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  
                  {/* Sony */}
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/img/sony.png"
                      alt="Sony"
                      width={120}
                      height={60}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  
                  {/* NHS */}
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/img/nhs.jpeg"
                      alt="NHS"
                      width={100}
                      height={60}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  
                  {/* Department for Education */}
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/img/department for education.png"
                      alt="Department for Education"
                      width={180}
                      height={80}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  
                  {/* Luton Engineering */}
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/img/logo/Luton+Engineering+New+Logo-226w.png"
                      alt="Luton Engineering"
                      width={180}
                      height={50}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </Section>
      </section>
      <style jsx>{`
        #trust {
          overflow: visible;
        }
        
        .trust-section-partial {
          background: linear-gradient(
            to bottom,
            rgba(252, 80, 18, 0.05) 0%,
            rgba(252, 80, 18, 0.05) 50%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 1) 100%
          ) !important;
          position: relative;
        }
        
        .trust-section-partial::before {
          display: none !important;
        }
        
        .trust-box-container {
          width: 1200px;
          max-width: 100%;
          position: relative;
        }
        
        .trust-box {
          width: 100%;
          position: relative;
          z-index: 2;
        }
        
        .trust-box-bg {
          display: none;
        }
        
        @media (max-width: 1200px) {
          .trust-box-container {
            width: calc(100% - 2rem);
            margin-left: 1rem;
            margin-right: 1rem;
          }
        }
      `}</style>
    </>
  )
}

