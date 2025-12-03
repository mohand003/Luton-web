export default function Section({ children, className = '', ...props }) {
  return (
    <div
      className={`relative max-w-[1440px] px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden pb-2.5 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

