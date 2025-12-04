import { IoCheckmarkCircle } from 'react-icons/io5'

export default function ListItem({ title, children }) {
  return (
    <li className="space-y-1 list-none">
      <div className="flex items-center space-x-3">
        <IoCheckmarkCircle size={24} className="text-primary flex-shrink-0" />
        <span className="text-inherit">{title}</span>
      </div>
      {children}
    </li>
  )
}

