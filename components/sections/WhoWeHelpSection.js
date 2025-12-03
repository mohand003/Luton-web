import Section from '../base/Section'
import ListItem from '../landing/ListItem'
import { IoConstructOutline, IoFlashOutline, IoCubeOutline, IoGridOutline, IoCarOutline } from 'react-icons/io5'

export default function WhoWeHelpSection() {
  return (
    <section id="who-we-help" className="w-full py-16 section-bg-light">
      <Section>
        {/* Left Side - 3D Illustration */}
        <div className="col-span-12 lg:col-span-6 px-4 lg:pr-8 mt-8 lg:mt-0 flex items-center justify-center lg:justify-start">
          <div data-aos="fade-right" className="relative w-full max-w-lg h-[500px] flex items-center justify-center">
            {/* Construction & Engineering - Top Left */}
            <div className="absolute top-12 left-8 z-20 transform rotate-[-5deg]">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-primary rounded-xl flex items-center justify-center relative">
                <div className="absolute inset-2 bg-white/20 rounded-lg flex items-center justify-center">
                  <IoConstructOutline className="text-white" size={64} />
                </div>
                {/* Construction elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded"></div>
              </div>
            </div>
            
            {/* Power & Utilities - Top Right */}
            <div className="absolute top-8 right-12 z-20 transform rotate-[5deg]">
              <div className="w-28 h-28 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-2 bg-white/20 rounded-full flex items-center justify-center">
                  <IoFlashOutline className="text-white" size={56} />
                </div>
                {/* Lightning bolts */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-4 bg-yellow-200 rounded-full"></div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-4 bg-yellow-200 rounded-full"></div>
              </div>
            </div>
            
            {/* Warehousing & Logistics - Center Large */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center relative">
                <div className="absolute inset-3 bg-white/20 rounded-xl flex items-center justify-center">
                  <IoCubeOutline className="text-white" size={80} />
                </div>
                {/* Warehouse boxes */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/30 rounded"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/30 rounded"></div>
                <div className="absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 bg-white/30 rounded"></div>
              </div>
            </div>
            
            {/* Manufacturing & Assembly - Bottom Left */}
            <div className="absolute bottom-16 left-12 z-20 transform rotate-[3deg]">
              <div className="w-36 h-36 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center relative">
                <div className="absolute inset-3 bg-white/20 rounded-lg flex items-center justify-center">
                  <IoGridOutline className="text-white" size={72} />
                </div>
                {/* Manufacturing grid pattern */}
                <div className="absolute top-2 left-2 w-6 h-6 border-2 border-white/40"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-2 border-white/40"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-2 border-white/40"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-2 border-white/40"></div>
              </div>
            </div>
            
            {/* Distributors and Wholesalers - Bottom Right */}
            <div className="absolute bottom-12 right-8 z-20 transform rotate-[-3deg]">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center relative">
                <div className="absolute inset-2 bg-white/20 rounded-lg flex items-center justify-center">
                  <IoCarOutline className="text-white" size={64} />
                </div>
                {/* Distribution arrows */}
                <div className="absolute -top-2 right-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-6 border-b-green-300"></div>
                <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-6 border-t-green-300"></div>
              </div>
            </div>
            
            {/* Connecting lines/dots for visual flow */}
            <svg className="absolute inset-0 w-full h-full z-10 opacity-20" style={{ pointerEvents: 'none' }}>
              <circle cx="25%" cy="20%" r="3" fill="#FC5012" />
              <circle cx="75%" cy="18%" r="3" fill="#FC5012" />
              <circle cx="50%" cy="50%" r="4" fill="#FC5012" />
              <circle cx="30%" cy="75%" r="3" fill="#FC5012" />
              <circle cx="70%" cy="78%" r="3" fill="#FC5012" />
              <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="#FC5012" strokeWidth="2" />
              <line x1="75%" y1="18%" x2="50%" y2="50%" stroke="#FC5012" strokeWidth="2" />
              <line x1="30%" y1="75%" x2="50%" y2="50%" stroke="#FC5012" strokeWidth="2" />
              <line x1="70%" y1="78%" x2="50%" y2="50%" stroke="#FC5012" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="col-span-12 lg:col-span-6 px-4 lg:pl-8 mt-12 lg:mt-0 flex items-center">
          <div data-aos="fade-left" className="space-y-7 w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-[1.1]" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '36px', fontWeight: 600, lineHeight: '40px', letterSpacing: '-0.02em' }}>
              Businesses we support in <span style={{ color: '#FC5012' }}>Ghana</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}>
              We work with various industries across Ghana, helping them streamline operations and improve efficiency.
            </p>
            <ul className="space-y-5 text-left text-lg sm:text-xl md:text-2xl list-none" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '24px' }}>
              <ListItem title="Construction & engineering companies" />
              <ListItem title="Power & utilities" />
              <ListItem title="Warehousing & logistics" />
              <ListItem title="Manufacturing & assembly" />
              <ListItem title="Distributors and wholesalers" />
            </ul>
            <p className="text-xl sm:text-2xl font-semibold text-primary mt-8" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}>
              If you manage stock, equipment, or approvals — we can help.
            </p>
          </div>
        </div>
      </Section>
    </section>
  )
}

