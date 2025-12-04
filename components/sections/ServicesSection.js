import Section from '../base/Section'
import { 
  IoSearchOutline, 
  IoCubeOutline,
  IoGridOutline,
  IoSparklesOutline,
  IoBarChartOutline,
  IoCloudOutline
} from 'react-icons/io5'

export default function ServicesSection() {
  const services = [
    {
      icon: IoSearchOutline,
      iconBg: '#9333EA', // Purple
      title: '1. Process Optimisation & Strategic Consultancy',
      description: 'Clear, efficient processes make every system work better. This service helps teams remove bottlenecks, reduce waste, and create a strong foundation for scaling operations with confidence and consistency.'
    },
    {
      icon: IoCubeOutline,
      iconBg: '#EC4899', // Pink
      title: '2. Inventory Management System (IMS)',
      description: 'A practical tool for tracking stock, deliveries and project usage in real time. Businesses gain visibility, reduce losses, speed up approvals, and keep daily operations under control across multiple sites.'
    },
    {
      icon: IoGridOutline,
      iconBg: '#F97316', // Orange
      title: '3. Modular ERP (Phased Rollout)',
      description: 'A flexible ERP that grows at the pace of the business. Start with one department, prove value quickly, then expand. Designed to improve accuracy, cost control and day-to-day coordination.'
    },
    {
      icon: IoSparklesOutline,
      iconBg: '#14B8A6', // Teal
      title: '4. Automation & AI',
      description: 'Automates repetitive tasks, cleans messy data, and speeds up decision-making. Helps teams work faster with fewer errors, freeing people to focus on higher-value activities without increasing headcount.'
    },
    {
      icon: IoBarChartOutline,
      iconBg: '#3B82F6', // Blue
      title: '5. Data & Reporting',
      description: 'Simple dashboards and clear reports that help leaders understand performance, manage cashflow, and plan ahead. Reliable data becomes part of everyday decisions, not something recreated at month-end.'
    },
    {
      icon: IoCloudOutline,
      iconBg: '#EF4444', // Red
      title: '6. Cloud & Infrastructure Services',
      description: 'Secure, reliable hosting and access controls that ensure systems run smoothly. Removes the need for heavy hardware investment and provides a stable foundation for digital tools and future growth.'
    }
  ]

  return (
    <section id="services" className="w-full pt-16 pb-12 bg-white">
      <Section>
        <div className="col-span-12 text-center space-y-4 px-4 mb-16">
          <h2 data-aos="fade-up" className="text-neutral-800" style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: '40px'
          }}>
            Practical Solutions for Everyday <span style={{ color: '#FC5012' }}>Business Challenges</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="150" className="text-gray-600 mt-4" style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '26px'
          }}>
            Designed to improve day-to-day operations and make work easier, faster and more reliable.
          </p>
        </div>
        <div className="col-span-12 grid pb-4 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                data-aos="fade-up" 
                data-aos-delay={index * 150}
                className="bg-white p-8 rounded-xl shadow-lg transition-shadow duration-300"
              >
                <div 
                  className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center"
                  style={{ backgroundColor: service.iconBg }}
                >
                  <IconComponent className="text-white" size={28} />
                </div>
                <h3 className="text-gray-800 mb-3" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px'
                }}>
                  {service.title}
                </h3>
                <p className="text-gray-600" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '22.75px'
                }}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>
    </section>
  )
}

