export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`text-sm lg:text-base text-center rounded-full transition duration-300 font-medium ${className}`}
      style={{ fontWeight: 500, fontFamily: 'Poppins, sans-serif' }}
      {...props}
    >
      {children}
    </button>
  )
}

