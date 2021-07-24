import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 mx-40">
      <h1 className="text-3xl font-tactile tracking-tighter ml-16 leading-tight md:pr-8">
        emma westbrook
      </h1>
      <a
        href="/"
        className=""
      >
        <Image className="" src='/sun.png' width='100px' height='100px' />

      </a>

    </section>
  )
}
