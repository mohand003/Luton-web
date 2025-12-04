import Section from '../base/Section'
import Button from '../base/Button'

export default function CaseStudySection({ onBookCall, onSeeHowItWorks }) {
  return (
    <section id="case-study" className="w-full py-16 section-bg-light">
      <Section>
        <div className="col-span-12 lg:col-span-6 px-4 lg:pr-8 mt-8 lg:mt-0 flex items-center">
          <div data-aos="fade-right" className="space-y-8 w-full">
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
            <div className="space-y-3">
              <h3 className="text-neutral-800" style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '28px'
              }}>
                Control Over Stock
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
            <div className="space-y-3">
              <h3 className="text-neutral-800" style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '28px'
              }}>
                Decisions Driven by Data
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
            <div className="space-y-3">
              <h3 className="text-neutral-800" style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '28px'
              }}>
                Expanding Into ERP
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
            <p className="text-neutral-600 mt-6" style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22.75px'
            }}>
              It's still work in progress. Let us help you start the journey.
            </p>

            {/* Button */}
            <div className="mt-6">
              <Button 
                onClick={onBookCall}
                className="max-w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white cursor-pointer"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
        
        {/* Right Side - Systems Illustration */}
        <div className="col-span-12 lg:col-span-6 px-4 lg:pl-8 mt-12 lg:mt-0 flex items-center">
          <div data-aos="fade-left" className="relative w-full flex items-center justify-center min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] py-8">
            <div className="relative w-full h-full flex items-center justify-center" style={{ maxWidth: '100%' }}>
              {/* Central Badge - "We Tried It First" */}
              <div className="relative z-20 transform rotate-[-5deg]">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 bg-gradient-to-br from-primary via-primary-dark to-primary rounded-full border-4 border-white flex items-center justify-center relative overflow-hidden">
                  {/* Checkmark Icon */}
                  <div className="relative z-10">
                    <svg className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-12 h-12 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Computer Screens - Representing Systems */}
              {/* Screen 1 - IMS System */}
              <div className="absolute z-15 top-12 sm:top-16 lg:top-20 left-8 sm:left-16 lg:left-20 xl:left-24 transform rotate-[-12deg] hover:scale-110 transition-transform duration-300">
                <div className="w-36 h-28 sm:w-44 sm:h-32 lg:w-52 lg:h-40 xl:w-60 xl:h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-gray-600 relative">
                  {/* Screen Content */}
                  <div className="absolute inset-1 bg-gray-100 rounded">
                    <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                      <div className="h-1.5 sm:h-2 bg-primary rounded w-3/4"></div>
                      <div className="h-1.5 sm:h-2 bg-gray-300 rounded w-full"></div>
                      <div className="h-1.5 sm:h-2 bg-gray-300 rounded w-5/6"></div>
                      <div className="flex gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary-dark rounded-full"></div>
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  {/* Screen Stand */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 sm:w-32 lg:w-40 h-3 bg-gray-700 rounded"></div>
                  {/* Label */}
                  <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 text-sm sm:text-base lg:text-lg font-semibold text-primary whitespace-nowrap">IMS</div>
                </div>
              </div>
              
              {/* Screen 2 - ERP System */}
              <div className="absolute z-15 top-12 sm:top-16 lg:top-20 right-8 sm:right-16 lg:right-20 xl:right-24 transform rotate-[12deg] hover:scale-110 transition-transform duration-300">
                <div className="w-36 h-28 sm:w-44 sm:h-32 lg:w-52 lg:h-40 xl:w-60 xl:h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-gray-600 relative">
                  {/* Screen Content */}
                  <div className="absolute inset-1 bg-gray-100 rounded">
                    <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                      <div className="h-1.5 sm:h-2 bg-primary rounded w-full"></div>
                      <div className="h-1.5 sm:h-2 bg-gray-300 rounded w-4/5"></div>
                      <div className="h-1.5 sm:h-2 bg-gray-300 rounded w-3/4"></div>
                      <div className="flex gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary-dark rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  {/* Screen Stand */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 sm:w-32 lg:w-40 h-3 bg-gray-700 rounded"></div>
                  {/* Label */}
                  <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 text-sm sm:text-base lg:text-lg font-semibold text-primary whitespace-nowrap">ERP</div>
                </div>
              </div>
              
              {/* API/Integration Icons */}
              {/* API Icon - Left */}
              <div className="absolute z-15 top-1/3 left-4 sm:left-8 lg:left-12 xl:left-16 transform rotate-[-8deg] hover:scale-110 transition-transform duration-300">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl border-2 border-blue-300 flex items-center justify-center">
                  <svg className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              {/* Support Icon - Right */}
              <div className="absolute z-15 top-1/3 right-4 sm:right-8 lg:right-12 xl:right-16 transform rotate-[8deg] hover:scale-110 transition-transform duration-300">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 bg-gradient-to-br from-green-500 to-green-600 rounded-xl border-2 border-green-300 flex items-center justify-center">
                  <svg className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Tablet/Device - Bottom Left */}
              <div className="absolute z-15 bottom-24 sm:bottom-28 lg:bottom-32 xl:bottom-36 left-8 sm:left-16 lg:left-20 xl:left-24 transform rotate-[5deg] hover:scale-110 transition-transform duration-300">
                <div className="w-32 h-24 sm:w-40 sm:h-32 lg:w-48 lg:h-36 xl:w-56 xl:h-44 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg border-2 border-gray-500 relative">
                  <div className="absolute inset-1 bg-gray-100 rounded">
                    <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                      <div className="h-1.5 sm:h-2 bg-primary rounded w-full"></div>
                      <div className="h-1.5 sm:h-2 bg-gray-300 rounded w-2/3"></div>
                      <div className="h-1.5 sm:h-2 bg-gray-300 rounded w-4/5"></div>
                    </div>
                  </div>
                  {/* Label */}
                  <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 text-sm sm:text-base lg:text-lg font-semibold text-primary whitespace-nowrap">Mobile</div>
                </div>
              </div>
              
              {/* Dashboard/Chart Icon - Bottom Right */}
              <div className="absolute z-15 bottom-24 sm:bottom-28 lg:bottom-32 xl:bottom-36 right-8 sm:right-16 lg:right-20 xl:right-24 transform rotate-[-5deg] hover:scale-110 transition-transform duration-300">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl border-2 border-purple-300 flex items-center justify-center">
                  <svg className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              
              {/* Connection Lines - Showing Integration */}
              <svg className="absolute inset-0 w-full h-full z-5 opacity-20" style={{ pointerEvents: 'none' }}>
                <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="#FC5012" strokeWidth="3" />
                <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="#FC5012" strokeWidth="3" />
                <line x1="15%" y1="35%" x2="50%" y2="50%" stroke="#FC5012" strokeWidth="3" />
                <line x1="85%" y1="35%" x2="50%" y2="50%" stroke="#FC5012" strokeWidth="3" />
              </svg>
              
              {/* Decorative Elements */}
              {/* Success Badge */}
              <div className="absolute z-10 top-16 sm:top-20 lg:top-24 right-20 sm:right-24 lg:right-28 xl:right-32 transform rotate-12">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              {/* Availability Indicator */}
              <div className="absolute z-10 bottom-16 sm:bottom-20 lg:bottom-24 left-16 sm:left-20 lg:left-24 xl:left-28 transform rotate-[-15deg]">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-green-400 rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </section>
  )
}

