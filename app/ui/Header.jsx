import React from 'react';
import Link from 'next/link'

export default function Header() {
  return (
    <section>
      <div className='absolute mx-auto flex w-full flex-col flex-wrap items-center md:flex-row lg:w-4/5'>
        <div className='z-[1]'>
          <Link href="/" className='w-20 h-20 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' >
            <p className="blue-gradient-text text-lg">TO</p>
          </Link>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Front-end Developer</h1>
          <p className='mb-8 text-2xl leading-normal'>6+ years experienced Software Engineer
proficient in the JavaScript ecosystem</p>
        </div>
      </div>
    </section>
  )
}
