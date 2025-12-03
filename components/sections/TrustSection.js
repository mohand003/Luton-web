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
      <section id="trust" className="w-full relative -mt-24 pt-24 pb-16 section-bg-light trust-section-partial">
        <Section>
          <div className="col-span-12 relative z-10 flex justify-center">
            <div className="trust-box-container relative">
              {bgHeight > 0 && (
                <div 
                  className="trust-box-bg"
                  style={{ height: `${bgHeight}px` }}
                ></div>
              )}
              <div 
                ref={trustBoxRef}
                className="trust-box bg-white rounded-2xl shadow-xl p-8 sm:p-12 relative z-10"
              >
              <div className="text-center space-y-6">
                {/* Title */}
                <h2 data-aos="fade-up" className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800" style={{ fontWeight: 700, letterSpacing: '-0.01em', lineHeight: '1.2' }}>
                  Trusted by organisations in the <span style={{ color: '#FC5012' }}>UK & Ghana</span>:
                </h2>
                
                {/* Description */}
                <p data-aos="fade-up" data-aos-delay="150" className="text-base sm:text-lg md:text-xl text-neutral-500 font-normal max-w-2xl mx-auto" style={{ fontWeight: 400, lineHeight: 1.6 }}>
                  We combine UK-grade delivery with deep understanding of Ghana operations.
                </p>
                
                {/* Logos below */}
                <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 mt-6">
                  {/* Barclays */}
                  <div className="flex items-center justify-center">
                    <div className="text-xl font-bold text-neutral-800" style={{ color: '#00AEEF', letterSpacing: '2px', fontFamily: 'sans-serif' }}>BARCLAYS</div>
                  </div>
                  
                  {/* Sony */}
                  <div className="flex items-center justify-center">
                    <div className="text-2xl font-bold text-neutral-800" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>SONY</div>
                  </div>
                  
                  {/* NHS */}
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-12 bg-blue-600"></div>
                    <div className="text-xl font-bold" style={{ color: '#005EB8', fontFamily: 'sans-serif' }}>NHS</div>
                  </div>
                  
                  {/* Department for Education */}
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs font-semibold text-neutral-800 leading-tight" style={{ fontFamily: 'sans-serif' }}>Department for</div>
                      <div className="text-sm font-bold text-neutral-800" style={{ fontFamily: 'sans-serif' }}>Education</div>
                    </div>
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
            rgba(252, 80, 18, 0.06) 0%,
            rgba(252, 80, 18, 0.05) 5%,
            rgba(252, 80, 18, 0.04) 10%,
            rgba(252, 80, 18, 0.03) 20%,
            rgba(212, 62, 15, 0.04) 25%,
            rgba(212, 62, 15, 0.03) 30%,
            rgba(255, 255, 255, 0.98) 45%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 1) 100%
          );
          position: relative;
        }
        
        .trust-section-partial::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(252, 80, 18, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212, 62, 15, 0.1) 0%, transparent 50%);
          background-size: 600px 600px;
          background-position: -100px -100px, 100% 100%;
          pointer-events: none;
          z-index: 0;
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

