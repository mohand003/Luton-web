import Section from '../base/Section'
import { IoCheckmarkCircleOutline, IoGlobeOutline, IoRocketOutline, IoConstructOutline, IoFlashOutline } from 'react-icons/io5'

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="w-full py-16 section-bg-light">
      <Section>
        <div className="col-span-12 text-center space-y-4 px-4 mb-16">
          <h2 data-aos="fade-up" style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: '40px'
          }}>
            Why Ghanaian businesses <span style={{ color: '#FC5012' }}>choose us</span>
          </h2>
        </div>
        <div className="col-span-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <div data-aos="fade-up" className="bg-white p-8 rounded-xl border-2 border-gray-300 transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <IoCheckmarkCircleOutline className="text-4xl text-primary" />
            </div>
            <h3 className="text-primary mb-3" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '28px'
            }}>1. We use our own system</h3>
            <p style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22.75px'
            }}>
              Most ERP vendors sell software. We prove ours works inside Luton Engineering every day.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="150" className="bg-white p-8 rounded-xl border-2 border-gray-300 transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <IoGlobeOutline className="text-4xl text-primary" />
            </div>
            <h3 className="text-primary mb-3" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '28px'
            }}>2. UK professionals, local Ghana understanding</h3>
            <p style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22.75px'
            }}>
              We deliver with the same discipline used for Barclays, NHS, and UK government. But we design for Ghana realities: internet issues, slow approvals, local workflows.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-8 rounded-xl border-2 border-gray-300 transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <IoRocketOutline className="text-4xl text-primary" />
            </div>
            <h3 className="text-primary mb-3" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '28px'
            }}>3. Start with a low-cost pilot</h3>
            <p style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22.75px'
            }}>
              No big upfront cost. Begin with one site or one department.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="450" className="bg-white p-8 rounded-xl border-2 border-gray-300 transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <IoConstructOutline className="text-4xl text-primary" />
            </div>
            <h3 className="text-primary mb-3" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '28px'
            }}>4. We fix your process before we touch the software</h3>
            <p style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22.75px'
            }}>
              Competitors jump straight to features. We first understand how you work, then build the right system.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="bg-white p-8 rounded-xl border-2 border-gray-300 transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
            <div className="flex justify-center mb-4">
              <IoFlashOutline className="text-4xl text-primary" />
            </div>
            <h3 className="text-primary mb-3" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '28px'
            }}>5. Practical automation and AI</h3>
            <p style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22.75px'
            }}>
              No hype. Real tools that remove repetitive work and save hours.
            </p>
          </div>
        </div>
      </Section>
    </section>
  )
}

