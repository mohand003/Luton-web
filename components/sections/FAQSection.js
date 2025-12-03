import Section from '../base/Section'
import Accordion from '../base/Accordion'
import Image from 'next/image'

const accordions = [
  {
    title: 'Do we have to replace our current tools?',
    description:
      'Not always. We connect to what you already use.',
  },
  {
    title: 'Is this cloud-based?',
    description:
      'Yes. Works well with Ghana conditions.',
  },
  {
    title: 'Do we need a big IT team?',
    description:
      'No. We handle setup and support.',
  },
  {
    title: 'Is this expensive?',
    description:
      'No. We start small and keep upfront costs low.',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="w-full py-16 bg-white">
      <Section>
        <div data-aos="fade-right" data-aos-delay="150" className="col-span-12 lg:col-span-6 px-4 sm:px-6 order-2 lg:order-1">
          <span className="badge-orange inline-block px-4 py-2 text-base sm:text-lg font-semibold uppercase tracking-wider text-white rounded-md mb-4 sm:mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, backgroundColor: '#FC5012', color: 'white' }}>Quick Support</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-6 text-neutral-800" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '36px', fontWeight: 600, lineHeight: '40px', letterSpacing: '-0.02em' }}>Frequently asked <span style={{ color: '#FC5012' }}>questions</span></h2>
          <div className="space-y-4">
            {accordions.map((accordion, index) => (
              <Accordion key={index} accordion={accordion} />
            ))}
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" className="col-span-12 lg:col-span-6 order-1 lg:order-2 flex items-start justify-center lg:justify-end">
          <div className="w-full max-w-lg lg:max-w-xl">
            <Image 
              src="/assets/img/Gemini_Generated_Image_ou5isxou5isxou5i-removebg-preview.png" 
              className="w-full h-auto object-contain max-h-[500px]" 
              alt="FAQ" 
              width={700} 
              height={700} 
            />
          </div>
        </div>
      </Section>
    </section>
  )
}

