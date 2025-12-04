import { useState } from 'react'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'

export default function Accordion({ accordion }) {
  const [selected, setSelected] = useState(false)

  return (
    <li className="list-none relative transition-all duration-300">
      <button 
        type="button" 
        className="w-full py-4 text-left focus:outline-none transition-all duration-300"
        onClick={() => setSelected(!selected)}
      >
        <div className="flex items-center justify-between">
          <span className="text-neutral-800 pr-4" style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '24px'
          }}>{accordion.title}</span>
          <div className="flex-shrink-0">
            {selected ? (
              <IoChevronUp size={20} className="transition-transform duration-300" style={{ color: '#FC5012' }} />
            ) : (
              <IoChevronDown size={20} className="text-gray-400 transition-transform duration-300" />
            )}
          </div>
        </div>
      </button>

      {selected && (
        <div className="mt-1 mb-2 bg-white rounded-lg">
          <p className="text-gray-600" style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '22.75px'
          }}>{accordion.description}</p>
        </div>
      )}
      
      {!selected && <div className="border-b border-gray-200 mt-2"></div>}
    </li>
  )
}

