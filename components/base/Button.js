export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`text-sm text-center rounded-full hover:shadow-md hover:shadow-primary/50 transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

