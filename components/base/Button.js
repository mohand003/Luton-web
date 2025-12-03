export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`text-sm lg:text-base text-center rounded-full hover:shadow-md hover:shadow-primary/50 transition duration-300 font-medium ${className}`}
      style={{ fontWeight: 500, fontFamily: 'Inter, DM Sans, sans-serif' }}
      {...props}
    >
      {children}
    </button>
  )
}

