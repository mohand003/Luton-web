import Section from '../base/Section'
import ListItem from '../landing/ListItem'
import { IoCubeOutline, IoGridOutline, IoSparklesOutline, IoConstructOutline } from 'react-icons/io5'

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 bg-white">
      <Section>
        <div className="col-span-12 text-center space-y-4 px-4 mb-16">
          <h2 data-aos="fade-up" className="text-neutral-800" style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: '40px'
          }}>
            Our Services for <span style={{ color: '#FC5012' }}>Ghana</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="150" className="text-lg sm:text-xl text-gray-600 mt-4" style={{ fontWeight: 400, lineHeight: 1.6 }}>
            Start small. Prove value. Scale when ready.
          </p>
        </div>
        <div className="col-span-12 grid sm:grid-cols-2 gap-6 px-4">
          {/* Card 1 - Inventory Management System */}
          <div data-aos="fade-up" className="bg-white p-8 rounded-xl border-2 border-gray-300 transition-shadow duration-300">
            <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center mx-auto" style={{
              background: 'linear-gradient(135deg, #FC5012 0%, #D43E0F 100%)'
            }}>
              <IoCubeOutline className="text-white" size={32} />
            </div>
            <h3 className="text-gray-800 mb-3 text-center" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '28px'
            }}>1. Inventory Management System (IMS)</h3>
            <p className="text-gray-600 text-center italic mb-4" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22.75px'
            }}>
              Built from real warehouse operations at Luton Engineering.
            </p>
            <ul className="space-y-1 text-left list-none" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px'
            }}>
              <ListItem title="Requisitions" />
              <ListItem title="Approvals" />
              <ListItem title="Goods in / out" />
              <ListItem title="Stock levels" />
              <ListItem title="Warehouse audits" />
              <ListItem title="Simple dashboards" />
            </ul>
          </div>

          {/* Card 2 - Modular ERP */}
          <div data-aos="fade-up" data-aos-delay="150" className="bg-white p-8 rounded-xl border-2 border-gray-300 transition-shadow duration-300">
            <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center mx-auto" style={{
              background: 'linear-gradient(135deg, #FC5012 0%, #D43E0F 100%)'
            }}>
              <IoGridOutline className="text-white" size={32} />
            </div>
            <h3 className="text-gray-800 mb-3 text-center" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '28px'
            }}>2. Modular ERP (Phased Rollout)</h3>
            <p className="text-gray-600 text-center italic mb-4" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22.75px'
            }}>
              Designed for Ghana companies who want to digitise slowly, one department at a time.
            </p>
            <ul className="space-y-1 text-left list-none" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px'
            }}>
              <ListItem title="Finance" />
              <ListItem title="Purchasing" />
              <ListItem title="Production" />
              <ListItem title="Projects" />
              <ListItem title="HR basics" />
              <ListItem title="Job costing" />
            </ul>
          </div>

          {/* Card 3 - Automation & AI */}
          <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-8 rounded-xl border-2 border-gray-300 transition-shadow duration-300">
            <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center mx-auto" style={{
              background: 'linear-gradient(135deg, #FC5012 0%, #D43E0F 100%)'
            }}>
              <IoSparklesOutline className="text-white" size={32} />
            </div>
            <h3 className="text-gray-800 mb-3 text-center" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '28px'
            }}>3. Automation & AI</h3>
            <ul className="space-y-1 text-left list-none" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px'
            }}>
              <ListItem title="Remove manual work" />
              <ListItem title="Connect your systems" />
              <ListItem title="Clean and dedupe your data" />
              <ListItem title="Auto-generate simple reports" />
              <ListItem title="Train your teams to use AI the right way" />
            </ul>
          </div>

          {/* Card 4 - Advisory, Training & Support */}
          <div data-aos="fade-up" data-aos-delay="450" className="bg-white p-8 rounded-xl border-2 border-gray-300 transition-shadow duration-300">
            <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center mx-auto" style={{
              background: 'linear-gradient(135deg, #FC5012 0%, #D43E0F 100%)'
            }}>
              <IoConstructOutline className="text-white" size={32} />
            </div>
            <h3 className="text-gray-800 mb-3 text-center" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '28px'
            }}>4. Advisory, Training & Support</h3>
            <p className="text-gray-600 text-center leading-relaxed" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22.75px'
            }}>
              We map your processes, set up the right workflows, and support your team after go-live.
            </p>
          </div>
        </div>
      </Section>
    </section>
  )
}

