'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ReactRotatingText from 'react-rotating-text';
import Button from '@components/button';
import img1 from '../../../../public/images/main.jpg';
import img2 from '../../../../public/images/main2.png';
import img3 from '../../../../public/images/main3.jpg';
import img4 from '../../../../public/images/main4.jpg';

const backgroundArr = [img1, img2, img3, img4];

export default function PageBanner() {
  const router = useRouter();

  const [randomImageIndex, setRandomImageIndex] = useState<number>(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundArr.length);
    setRandomImageIndex(randomIndex);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex w-full flex-col items-center justify-center md:w-3/5 md:items-start">
        <h2 className="mb-4 text-2xl font-extrabold text-slate-800 md:text-3xl lg:text-5xl">
          Hello, I&apos;m{' '}
          <span className="text-purple-500">
            <ReactRotatingText
              items={['Kwangmook', 'Creative Dev', 'Selt-Confident']}
            />
          </span>
          .
        </h2>
        <h2 className="mb-8 text-2xl font-extrabold text-slate-800 md:text-3xl lg:text-5xl">
          Frontend Developer
        </h2>
        <p className="mb-7 text-lg font-bold text-slate-500 md:text-xl lg:text-2xl">
          Specialized in NextJS and React
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            text="Contact Me"
            className="rounded-3xl"
            handleClick={() => router.push('/contact')}
          />
          <Button
            text="About Me"
            className="rounded-3xl"
            handleClick={() => router.push('/about')}
          />
        </div>
      </div>
      <div className="hidden grow justify-center md:flex">
        <Image
          className="h-72 w-72 rounded-full p-4 shadow-2xl brightness-110 lg:h-96 lg:w-96"
          src={backgroundArr[randomImageIndex]}
          alt="Main Image"
          priority
        />
      </div>
    </div>
  );
}
