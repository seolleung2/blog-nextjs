'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ReactRotatingText from 'react-rotating-text';
import Button from '@components/button';
import MainImage from '../../../../public/images/main-image.jpg';
import MainImage2 from '../../../../public/images/main-image2.jpeg';
import MainImage3 from '../../../../public/images/main-image3.jpeg';

const backgroundArr = [MainImage, MainImage2, MainImage3];

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
        <h2 className="mb-4 select-none text-2xl font-extrabold text-slate-800 dark:text-white md:text-3xl lg:text-5xl">
          Hello, I&apos;m{' '}
          <span className="text-purple-500 dark:text-purple-600">
            <ReactRotatingText
              items={['Kwangmook', 'Dotorimook', '신뢰에요']}
            />
          </span>
        </h2>
        <h2 className="mb-8 select-none text-2xl font-extrabold text-slate-800 dark:text-white md:text-3xl lg:text-5xl">
          Frontend Developer 🌞
        </h2>
        <p className="mb-7 text-lg font-medium text-slate-500 dark:text-slate-300 md:text-xl lg:text-2xl">
          안녕하세요! 프론트엔드 개발자 정광묵 입니다. 꾸준함을 유지하는
          개발자를 지향합니다. 🛫여행, 🏔️등산, 📚교보문고, 🍕맛집탐방을
          좋아합니다
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            text="About Me"
            className="rounded-3xl"
            handleClick={() => router.push('/about')}
          />
        </div>
      </div>
      <div className="hidden grow justify-center md:flex">
        <Image
          className="h-72 w-72 rounded-full object-cover p-4 shadow-2xl brightness-110 dark:bg-slate-200 dark:shadow-slate-300 lg:h-96 lg:w-96"
          src={backgroundArr[randomImageIndex]}
          alt="Main Image"
          priority
        />
      </div>
    </div>
  );
}
