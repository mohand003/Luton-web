import Image from 'next/image'

export default function Step({ step }) {
  return (
    <div className="flex-1 max-w-[320px] xl:max-w-[400px] mx-auto text-center flex flex-col">
      <Image
        src={`/assets/img/${step.img}`}
        alt=""
        className="max-w-[300px] mx-auto mb-6 sm:mb-4 rounded-lg"
        width={300}
        height={240}
      />
      <h3 className="text-neutral-800 flex-shrink-0" style={{ 
        fontFamily: 'Poppins, sans-serif',
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: '28px',
        height: '28px',
        maxWidth: '280px',
        margin: '0 auto 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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

