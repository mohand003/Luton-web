import Section from '../base/Section'
import { 
  IoCheckmarkCircleOutline, 
  IoShieldOutline,
  IoConstructOutline,
  IoRocketOutline,
  IoFlashOutline,
  IoGlobeOutline
} from 'react-icons/io5'

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: IoCheckmarkCircleOutline,
      iconBg: '#9333EA', // Purple
      title: '1. Proven in Real Operations',
      description: 'Our systems run inside Luton Engineering every day. You can see them working in real warehouses and projects, not just in slides or demos.'
    },
    {
      icon: IoShieldOutline,
      iconBg: '#EC4899', // Pink
      title: '2. High-Standard Delivery',
      description: 'Structured planning, clear governance and dependable execution shaped by complex programmes. You always know what\'s happening, why it matters, and when to expect progress.'
    },
    {
      icon: IoConstructOutline,
      iconBg: '#F97316', // Orange
      title: '3. Built Around Your Processes',
      description: 'We take time to understand how your teams work, improve the flow, and document the process clearly so everyone knows what "good" should look like before any system goes live.'
    },
    {
      icon: IoRocketOutline,
      iconBg: '#14B8A6', // Teal
      title: '4. Proven, Not Theoretical',
      description: 'You get a working pilot in as little as four to eight weeks. Early feedback reduces risk, builds confidence, and helps shape the solution before wider rollout.'
    },
    {
      icon: IoFlashOutline,
      iconBg: '#3B82F6', // Blue
      title: '5. Change That Actually Works',
      description: 'Technology is only half the challenge. We help teams adapt to new ways of working, handle cultural barriers, and build habits that make change stick across the organisation.'
    },
    {
      icon: IoGlobeOutline,
      iconBg: '#EF4444', // Red
      title: '6. Local Partnership, Long-Term Support',
      description: 'A partner who understands local realities, is easy to reach, and stays with you beyond go-live to ensure systems evolve as the business grows.'
    }
  ]

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
            Why Ghanaian businesses <span className="hero-orange-text" style={{ color: '#FC5012', fontWeight: 600 }}>choose us</span>
          </h2>
        </div>
        <div className="col-span-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div 
                key={index}
                data-aos="fade-up" 
                data-aos-delay={index * 150}
                className="bg-white p-8 rounded-xl border-2 border-gray-300 transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div 
                  className="w-16 h-16 rounded-full mb-4 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(252, 80, 18, 0.1)' }}
                >
                  <IconComponent className="text-[#FC5012]" size={32} />
                </div>
                <h3 className="text-gray-800 mb-3 flex-shrink-0" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px'
                }}>
                  {reason.title}
                </h3>
                <p className="text-gray-600" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '22.75px'
                }}>
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>
    </section>
  )
}

