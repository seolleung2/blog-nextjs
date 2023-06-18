import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도토리정을 소개합니다.',
  description: '도토리정의 프로필 소개 페이지 입니다.',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-200 py-8 dark:bg-gray-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-3xl font-bold">About me.🫠</h1>
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <Image
            className="max-h-96 w-full object-contain"
            src="/images/portrait.png"
            alt="my-image"
            width={500}
            height={350}
          />
          <div className="px-4 py-5 dark:bg-slate-500 sm:p-6">
            <h2 className="mb-2 text-lg font-bold">
              안녕하세요! 봐주셔서 감사합니다:)
            </h2>
            <p>
              안녕하세요. 프론트엔드 개발자 2년차의 경험을 쌓아나가고 있는
              개발자 정광묵 이라고 합니다. 컴퓨터 과학 전공이 아닌 외식조리학과
              전공 출신이고 개발(컴퓨터) 을 시작하기 전의 커리어는 식품회사에서
              연구원으로서 소스, 시즈닝, 밀키트 및 레토르트 식품 군에 대한 연구
              개발을 담당했었습니다.
            </p>
            <br />
            <p>
              여러 계기에 의해 컴퓨터 관련 개발 분야에 알게 되었고 6년간
              근무했던 곳을 떠나 새로운 분야에서 새로운 시작을 하기에
              이르렀습니다. 준비도 시작도 녹록한 것이 없었지만 아무튼 현재에
              최선을 다하고자 노력하는 중입니다.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            개발자 여정을 시작하기 전에 가지고 있던 짧은 경험들
          </h2>
          <div className="mt-4 flex items-center rounded-lg bg-[#f5f5f5] px-2 py-3 shadow-lg dark:bg-slate-500">
            <Image
              className="h-24 w-24 rounded-full"
              src="/images/culinary-arts.jpeg"
              alt="my-image"
              width={500}
              height={350}
            />
            <div className="ml-4">
              <h3 className="font-bold">외식조리학전공</h3>
              <p className="text-xs sm:text-sm">
                Position: 외식 조리관련 학과 전공 (술안주 원툴)
              </p>
              <p className="text-xs sm:text-sm">Duration: 2007 - 2013</p>
              <p className="text-xs sm:text-sm">
                Description: 수업의 결과물을 다른학과 친구들에게 베풀고 다른
                걸로 바꿔먹은 경험이 존재
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center rounded-lg bg-[#f5f5f5] px-2 py-3 shadow-lg dark:bg-slate-500">
            <Image
              className="h-24 w-24 rounded-full"
              src="/images/1st-brigade.jpeg"
              alt="my-image"
              width={500}
              height={350}
            />
            <div className="ml-4">
              <h3 className="font-bold">1공수여단 아미</h3>
              <p className="text-xs sm:text-sm">
                Position: 보통의 2년 아미시절
              </p>
              <p className="text-xs sm:text-sm">Duration: 2008.01 - 2009.12</p>
              <p className="text-xs sm:text-sm">
                Description: 보통의 군인들과 비슷하지만 달랐던 것중 하나.
                비행기에서 낙하산에 의지에 뛰어내린 경험🪂
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center rounded-lg bg-[#f5f5f5] px-2 py-3 shadow-lg dark:bg-slate-500">
            <Image
              className="h-24 w-24 rounded-full"
              src="/images/sg-life.jpg"
              alt="my-image"
              width={500}
              height={350}
            />
            <div className="ml-4">
              <h3 className="font-bold">싱가포르 외노자 경험</h3>
              <p className="text-xs sm:text-sm">
                Position: Commis Cook 이라 읽고 외노자라 부른다
              </p>
              <p className="text-xs sm:text-sm">Duration: 2013.01 - 2014.01</p>
              <p className="text-xs sm:text-sm">
                Description: 이 때 이후로 라비올리를 좋아하지 않는다.
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center rounded-lg bg-[#f5f5f5] px-2 py-3 shadow-lg dark:bg-slate-500">
            <Image
              className="h-24 w-24 rounded-full"
              src="/images/food-industry.jpg"
              alt="my-image"
              width={500}
              height={350}
            />
            <div className="ml-4">
              <h3 className="font-bold">식품회사 연구원 근무</h3>
              <p className="text-xs sm:text-sm">
                Position: 사원 - 주임 - 대리의 3단 진화 경험.
              </p>
              <p className="text-xs sm:text-sm">Duration: 2014.06 - 2020.03</p>
              <p className="text-xs sm:text-sm">
                Description: MSG 는 무조건 나쁜 것이 아니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
