import Image from 'next/image'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-7xl font-tactile tracking-tighter leading-tight md:pr-8">
        Emma Westbrook
      </h1>
      <h4 className="text-center md:text-left text-2xl mt-5 md:pl-8">
        is a{' '}
        <a
          href="https://github.com/emmawestbrook"
          className="underline hover:text-success font-mono duration-200 transition-colors"
        >
          developer
        </a>{' '}
        and artist in minneapolis.
      </h4>
      <Image src='/sun.png' width='100px' height='100px' />

    </section>
  )
}
