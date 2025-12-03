import Link from 'next/link'

export default function NavLink({ name, url, onClick }) {
  return (
    <li className="w-full lg:w-auto">
      <Link
        href={url}
        onClick={onClick}
        className="block md:px-4 py-2 text-sm lg:text-base bg-transparent rounded-lg text-[#666666] hover:text-primary hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
        style={{ fontWeight: 400, fontFamily: 'Inter, DM Sans, sans-serif' }}
      >
        {name}
      </Link>
    </li>
  )
}

