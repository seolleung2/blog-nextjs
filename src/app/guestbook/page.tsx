import { Metadata } from 'next';
import Guestbook from '@components/guestbook';

export const metadata: Metadata = {
  title: '도토리정 블로그의 방명록 입니다.',
  description: '블로그 방명록에서 자유롭게 의견을 보낼 수 있습니다.',
};

export default function page() {
  return (
    <section className="flex justify-center">
      <Guestbook />
    </section>
  );
}
