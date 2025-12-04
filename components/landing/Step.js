import Image from 'next/image'

export default function Step({ step }) {
  return (
    <div className="flex-1 max-w-[320px] xl:max-w-[400px] mx-auto text-center flex flex-col h-full">
      <div className="w-full mb-6 sm:mb-4 flex-shrink-0" style={{ height: '240px' }}>
        <Image
          src={`/assets/img/${step.img}`}
          alt=""
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={240}
        />
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

