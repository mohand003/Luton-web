export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`text-sm lg:text-base text-center rounded-full transition-all duration-300 font-medium hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-95 ${className}`}
      style={{ 
        fontWeight: 500, 
        fontFamily: 'Poppins, sans-serif',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(252, 80, 18, 0.3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }}
      {...props}
    >
      {children}
    </button>
  )
}

