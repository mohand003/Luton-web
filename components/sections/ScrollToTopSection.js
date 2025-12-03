import { IoArrowUp } from 'react-icons/io5'

export default function ScrollToTopSection() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="w-full py-16 section-bg-light">
      <div className="w-full flex justify-center">
        <a
          data-aos="flip-down"
          data-aos-delay="150"
          href="#navbar"
          onClick={(e) => {
            e.preventDefault()
            handleScrollToTop()
          }}
          className="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
        >
          <span>Back to top</span>
          <IoArrowUp size={20} />
        </a>
      </div>
    </section>
  )
}

