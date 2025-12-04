export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`text-sm lg:text-base text-center rounded-full transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg active:scale-95 ${className}`}
      style={{ fontWeight: 500, fontFamily: 'Poppins, sans-serif' }}
      {...props}
    >
      {children}
    </button>
  )
}

