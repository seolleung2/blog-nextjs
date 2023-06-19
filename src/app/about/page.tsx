import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { DETAIL_EXPERIENCE_ITEMS } from '@service/constant';

export const metadata: Metadata = {
  title: '도토리정을 소개합니다.',
  description: '도토리정의 소개 페이지 입니다.',
};

export default function AboutPage() {
  return (
    <div className="rounded-md dark:bg-transparent lg:bg-gray-200">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 pl-1 text-3xl font-bold">About me.🫠</h1>
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <Image
            className="max-h-96 w-full object-contain"
            src="/images/portrait.png"
            alt="my-image"
            width={500}
            height={500}
          />
          <div className="px-4 py-5 dark:bg-stone-600 sm:p-6">
            <h2 className="mb-2 text-lg font-bold">
              안녕하세요! 제 블로그에 와주셔서 감사합니다🤗🤗
            </h2>
            <p>
              안녕하세요. 열심히 고군분투 개발 경험을 쌓아나가고 있는 프론트엔드
              개발자 정광묵 이라고 합니다. (요리를 하는 👨🏻‍🍳) 외식조리전공
              출신이고 현재의 직무로 전직을 하기 전에는 식품회사에서 소스,
              시즈닝, 밀키트, 레토르트 식품 군에 대한 연구 개발을
              담당했었습니다.
            </p>
            <br />
            <p>
              여러 계기에 의해 현재 몸담게 된 개발 분야에 대해 깊은 관심을
              가지게 되었고, 6년간 근무했던 곳을 떠나 현재는 개발이라는 직무에서
              도전해 나가는 중입니다. 준비도 시작도 녹록한 것이 없었지만 지금,
              현재에 최선을 다하고자 노력하는 중입니다.💪🏽💪🏽
            </p>
          </div>
        </div>
        <h2 className="mt-8 pl-1 text-xl font-bold md:text-2xl">
          개발자 여정을 시작하기 전 짧은 경험들
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-4">
          {DETAIL_EXPERIENCE_ITEMS.map((item) => (
            <div
              className="mt-4 flex items-center space-x-4 rounded-lg bg-white px-2 py-3 shadow-lg dark:bg-stone-500 md:w-fit md:flex-col md:space-x-0 md:space-y-4 md:px-4 md:py-6"
              key={item.title}
            >
              <Image
                className="h-24 w-24 rounded object-cover md:h-48 md:w-full"
                src={item.img_url}
                alt="my-image"
                width={500}
                height={500}
              />
              <div className="flex h-24 w-full flex-col justify-between md:w-auto">
                <h3 className="text-sm font-bold sm:text-base">{item.title}</h3>
                <div>
                  <p className="text-xs sm:text-sm">{item.description_first}</p>
                  <p className="text-xs sm:text-sm">
                    {item.description_second}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
