import { useState } from 'react'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'

export default function Accordion({ accordion }) {
  const [selected, setSelected] = useState(false)

  return (
    <li className="relative bg-white border border-gray-200 rounded-lg mb-4 shadow-sm hover:shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
      <button 
        type="button" 
        className="w-full px-6 py-5 text-left focus:outline-none rounded-lg transition-all duration-300"
        onClick={() => setSelected(!selected)}
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-neutral-800 pr-4">{accordion.title}</span>
          <div className="flex-shrink-0">
            {selected ? (
              <IoChevronUp size={24} className="text-primary transition-transform duration-300" />
            ) : (
              <IoChevronDown size={24} className="text-gray-400 transition-transform duration-300" />
            )}
          </div>
        </div>
      </button>

      {selected && (
        <>
          <div className="px-6">
            <div className="border-t-2 border-primary my-2"></div>
          </div>
          <div className="px-6 pb-5">
            <p className="text-sm text-gray-600 tracking-wide leading-relaxed">{accordion.description}</p>
          </div>
        </>
      )}
    </li>
  )
}

