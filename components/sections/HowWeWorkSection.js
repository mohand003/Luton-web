import Section from '../base/Section'
import Step from '../landing/Step'

const steps = [
  {
    img: 'civil-engineering-side-320w.webp',
    title: 'Free Discovery Call',
    description:
      'We learn about your business and identify your biggest challenges.',
  },
  {
    img: 'parallax+2-1920w.webp',
    title: 'Quick Site or Process Review',
    description:
      'We visit your site or review your workflow. You get a short plan with options and simple costs.',
  },
  {
    img: 'primary+substations-1920w.webp',
    title: 'Pilot First, Then Scale',
    description:
      'We launch a small pilot that shows real results. If it works, we expand. If not, you stop — no risk.',
  },
]

export default function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="w-full py-16 bg-white">
      <Section>
        <div className="col-span-12 text-center space-y-4 px-4 mb-12">
          <h2 data-aos="fade-up" style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: '40px'
          }}>
            Our simple <span style={{ color: '#FC5012' }}>3-step process</span>
          </h2>
        </div>
        <div className="col-span-12">
          <div
            data-aos="fade-up"
            className="relative w-full flex flex-col lg:flex-row items-stretch justify-between space-y-12 lg:space-y-0 px-4 xl:px-10"
          >
            {steps.map((step, index) => (
              <Step key={index} step={step} />
            ))}
          </div>
        </div>
      </Section>
    </section>
  )
}

