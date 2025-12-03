import { IoCheckmarkCircle } from 'react-icons/io5'

export default function ListItem({ title, children }) {
  return (
    <li className="space-y-2 list-none">
      <div className="flex items-center space-x-3">
        <IoCheckmarkCircle size={24} className="text-primary flex-shrink-0" />
        <span className="text-inherit" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '24px' }}>{title}</span>
      </div>
      {children}
    </li>
  )
}

