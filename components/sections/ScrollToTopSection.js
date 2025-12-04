import { IoArrowUp } from 'react-icons/io5'

export default function ScrollToTopSection() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="w-full py-12 section-bg-light">
      <div className="w-full flex justify-center">
        <button
          data-aos="flip-down"
          data-aos-delay="150"
          onClick={handleScrollToTop}
          className="px-6 py-3 flex items-center space-x-2 bg-white hover:bg-gray-50 border border-gray-300 rounded-md text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500
          }}
        >
          <span>Back to top</span>
          <IoArrowUp size={20} />
        </button>
      </div>
    </section>
  )
}

