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
      <h3 className="text-xl sm:text-2xl text-neutral-800 font-semibold">{step.title}</h3>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{step.description}</p>
    </div>
  )
}

