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
          className="px-6 py-3 flex items-center space-x-2 bg-white hover:bg-gray-50 border border-gray-300 rounded-md text-gray-700 transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(252, 80, 18, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          }}
        >
          <span>Back to top</span>
          <IoArrowUp size={20} />
        </button>
      </div>
    </section>
  )
}

