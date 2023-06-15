import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도토리정을 소개합니다.',
  description: '도토리정의 프로필 소개 페이지 입니다.',
};

export default function AboutPage() {
  return (
    <section className="w-auto text-center">
      <h2 className="text-3xl font-bold">🚧현재 블로그 공사중 입니다.🚧</h2>
    </section>
  );
}
