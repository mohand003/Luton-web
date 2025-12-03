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
      <h3 className="text-2xl sm:text-3xl text-neutral-800 font-semibold" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>{step.title}</h3>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{ fontWeight: 400, lineHeight: 1.6 }}>{step.description}</p>
    </div>
  )
}

