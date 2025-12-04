import Image from 'next/image'

export default function Step({ step }) {
  return (
    <div className="max-w-[320px] xl:max-w-[400px] space-y-6 sm:space-y-4 text-center">
      <Image
        src={`/assets/img/${step.img}`}
        alt=""
        className="max-w-[300px] mx-auto"
        width={300}
        height={240}
      />
      <h3 className="text-neutral-800" style={{ 
        fontFamily: 'Poppins, sans-serif',
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '28px'
      }}>{step.title}</h3>
      <p className="text-gray-700 leading-relaxed" style={{ 
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22.75px'
      }}>{step.description}</p>
    </div>
  )
}

