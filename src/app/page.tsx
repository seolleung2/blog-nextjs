'use client';

import Image from 'next/image';
import Button from '@components/button';

export default function Home() {
  return (
    <section className="flex justify-center md:space-x-4">
      <div className="flex flex-col justify-center">
        <h2 className="mb-4 text-2xl font-extrabold text-slate-800 md:text-3xl lg:text-5xl">
          Hello, I&apos;m <span className="text-purple-500">Kwangmook</span>.
        </h2>
        <h2 className="mb-8 text-2xl font-extrabold text-slate-800 md:text-3xl lg:text-5xl">
          Frontend Developer
        </h2>
        <p className="mb-7 text-lg font-bold text-slate-500 md:text-xl lg:text-2xl">
          Specialized in NextJS and React
        </p>
        <div className="space-x-4">
          <Button text="Contact Me" className="rounded-3xl" />
          <Button text="About Me" className="rounded-3xl" />
        </div>
      </div>
      <div className="hidden justify-center md:flex lg:grow">
        <Image
          className="h-80 w-80 rounded-full lg:h-[360px] lg:w-[360px]"
          src="/images/main-image.jpg"
          alt="Main Image"
          width={400}
          height={400}
          priority
        />
      </div>
    </section>
  );
}
