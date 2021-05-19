import Image from 'next/image'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center  md:mx-10 mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-7xl font-tactile hover:text-blue duration-400 transition-colors">
        Emma Westbrook
      </h1>
      <h4 className="text-center md:text-left text-2xl mt-5 md:pl-8 font-syne">
        is a{' '}
        <a
          href="https://github.com/emmawestbrook"
          className="underline hover:text-orange font-mono duration-400 transition-colors"
        >
          developer
        </a>{' '}
        and artist in chicago.
      </h4>
      <a
        href="/"
        className="mt-8 md:mt-0 pl-6 lg:pl-16"
      >
        <Image className="" src='/sun.png' width='100px' height='100px' />

      </a>

    </section>
  )
}
