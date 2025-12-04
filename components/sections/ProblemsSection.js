import Section from '../base/Section'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

export default function ProblemsSection({ onBookCall }) {
  return (
    <section id="problems" className="w-full py-16 bg-white">
      <Section>
        <div className="col-span-12 lg:col-span-6 px-4 lg:pr-8">
          {/* Left Side - Credit Cards Style Visualization */}
          <div data-aos="fade-right" className="relative flex items-center justify-center lg:justify-start h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] py-8 lg:py-0">
            {/* Stacked Cards */}
            <div className="relative z-10 flex items-center justify-center w-full max-w-[360px] sm:max-w-none">
              {/* Card 3 - Bottom Card (Primary Gradient) */}
              <div className="absolute transform rotate-[-8deg] translate-x-[-30px] sm:translate-x-[-40px] translate-y-[50px] sm:translate-y-[60px] w-[240px] h-[150px] sm:w-[280px] sm:h-[180px] md:w-[320px] md:h-[200px] rounded-xl overflow-hidden"
                   style={{
                     background: 'linear-gradient(135deg, #FC5012 0%, #D43E0F 100%)',
                     zIndex: 1
                   }}>
                <div className="relative h-full p-4 sm:p-6 text-white">
                  <div className="flex justify-between items-start mb-2 sm:mb-4">
                    <div className="w-8 h-6 sm:w-12 sm:h-8 bg-white/20 rounded"></div>
                    <div className="text-[10px] sm:text-xs opacity-80">DEBIT CARD</div>
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <div className="text-[10px] sm:text-xs opacity-80 mb-1 sm:mb-2 font-mono">6219 8610 2888 8075</div>
                    <div className="flex justify-between items-end">
                      <div className="text-[10px] sm:text-xs font-semibold">S.MOSTAFA ESMAEILI</div>
                      <div className="text-[10px] sm:text-xs">22/01</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Middle Card (Darker Gradient) */}
              <div className="absolute transform rotate-[-4deg] translate-x-[-15px] sm:translate-x-[-20px] translate-y-[25px] sm:translate-y-[30px] w-[260px] h-[160px] sm:w-[300px] sm:h-[190px] md:w-[340px] md:h-[210px] rounded-xl overflow-hidden"
                   style={{
                     background: 'linear-gradient(135deg, #D43E0F 0%, #B8320C 100%)',
                     zIndex: 2
                   }}>
                <div className="relative h-full p-4 sm:p-6 text-white">
                  <div className="flex justify-between items-start mb-2 sm:mb-4">
                    <div className="w-8 h-6 sm:w-12 sm:h-8 bg-white/20 rounded"></div>
                    <div className="text-[10px] sm:text-xs opacity-80">DEBIT CARD</div>
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <div className="text-[10px] sm:text-xs opacity-80 mb-1 sm:mb-2 font-mono">6219 8610 28•• ••••</div>
                    <div className="flex justify-between items-end">
                      <div className="text-[10px] sm:text-xs font-semibold">S.MOSTAFA ESMAEILI</div>
                      <div className="text-[10px] sm:text-xs">22/01</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 1 - Top Card (Patterned with Brand Colors) */}
              <div className="relative transform rotate-[2deg] translate-y-[-15px] sm:translate-y-[-20px] w-[280px] h-[170px] sm:w-[320px] sm:h-[200px] md:w-[360px] md:h-[220px] rounded-xl overflow-hidden"
                   style={{
                     background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                     zIndex: 3
                   }}>
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-30"
                     style={{
                       backgroundImage: `
                         repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(252, 80, 18, 0.1) 10px, rgba(252, 80, 18, 0.1) 20px),
                         repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(212, 62, 15, 0.1) 10px, rgba(212, 62, 15, 0.1) 20px)
                       `
                     }}></div>
                <div className="relative h-full p-4 sm:p-6 text-white">
                  <div className="flex justify-between items-start mb-6 sm:mb-8">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-8 h-6 sm:w-12 sm:h-8 bg-white/20 rounded"></div>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white/40 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/60"></div>
                      </div>
                    </div>
                    <div className="text-base sm:text-lg font-bold" style={{ 
                      background: 'linear-gradient(136.91deg, #FC5012 -12.5%, #D43E0F 107.5%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>LUTON</div>
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <div className="text-sm sm:text-lg font-mono mb-2 sm:mb-3 tracking-wider">6219 8610 2888 8075</div>
                    <div className="flex justify-between items-end">
                      <div className="text-xs sm:text-sm font-semibold">S.MOSTAFA ESMAEILI</div>
                      <div className="text-xs sm:text-sm">22/01</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="col-span-12 lg:col-span-6 px-4 lg:pl-8 mt-8 lg:mt-0 flex items-center">
          <div data-aos="fade-left" className="space-y-5 sm:space-y-6 w-full">
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
            
            <div className="space-y-1.5 sm:space-y-2 mt-6 sm:mt-8">
              <div className="flex items-start space-x-3">
                <IoCheckmarkCircleOutline className="text-primary flex-shrink-0 mt-0.5 sm:mt-1" size={20} />
                <span className="text-neutral-800" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px'
                }}>Too much manual paperwork</span>
              </div>
              <div className="flex items-start space-x-3">
                <IoCheckmarkCircleOutline className="text-primary flex-shrink-0 mt-0.5 sm:mt-1" size={20} />
                <span className="text-neutral-800" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px'
                }}>Stock going missing or hard to track</span>
              </div>
              <div className="flex items-start space-x-3">
                <IoCheckmarkCircleOutline className="text-primary flex-shrink-0 mt-0.5 sm:mt-1" size={20} />
                <span className="text-neutral-800" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px'
                }}>Approvals take too long</span>
              </div>
              <div className="flex items-start space-x-3">
                <IoCheckmarkCircleOutline className="text-primary flex-shrink-0 mt-0.5 sm:mt-1" size={20} />
                <span className="text-neutral-800" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px'
                }}>Decisions made without reliable data</span>
              </div>
              <div className="flex items-start space-x-3">
                <IoCheckmarkCircleOutline className="text-primary flex-shrink-0 mt-0.5 sm:mt-1" size={20} />
                <span className="text-neutral-800" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px'
                }}>Dependence on "one key person" for everything</span>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl font-semibold text-neutral-800 mt-4 sm:mt-6" style={{ fontWeight: 600 }}>
              We spent 4+ years solving these problems inside Luton Engineering. Now we help other businesses do the same.
            </p>
          </div>
        </div>
      </Section>
    </section>
  )
}

