import Image from 'next/image'
import AnimatedSquares from '../base/AnimatedSquares'
import { useRef } from 'react'

export default function Step({ step }) {
  const imageContainerRef = useRef(null)
  
  return (
    <div className="flex-1 max-w-[320px] xl:max-w-[400px] mx-auto text-center flex flex-col h-full">
      <div ref={imageContainerRef} className="relative w-full mb-6 sm:mb-4 flex-shrink-0 overflow-visible rounded-lg p-4" style={{ height: '240px' }}>
        <AnimatedSquares containerRef={imageContainerRef} />
        <div className="relative z-10 rounded-lg overflow-hidden h-full" style={{ width: '85%', margin: '0 auto' }}>
          <Image
            src={`/assets/img/${step.img}`}
            alt=""
            className="w-full h-full object-cover"
            width={300}
            height={240}
          />
        </div>
      </div>
      <h3 className="text-neutral-800 flex-shrink-0" style={{ 
        fontFamily: 'Poppins, sans-serif',
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: '28px',
        maxWidth: '280px',
        margin: '0 auto',
        paddingBottom: 0
      }}>{step.title}</h3>
      <p className="text-gray-700 leading-relaxed flex-grow" style={{ 
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22.75px',
        marginTop: '12px'
      }}>{step.description}</p>
    </div>
  )
}

