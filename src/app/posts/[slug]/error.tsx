'use client';
import Button from '@components/button';
import { useRouter } from 'next/navigation';

type Props = {
  error?: Error;
  reset?: () => void;
};

export default function Error({ error, reset }: Props) {
  const router = useRouter();

  return (
    <section className="mx-auto flex w-fit flex-col space-y-4">
      <div className="">
        <h2 className="mb-2 text-xl font-bold">Not Found</h2>
        <p>You just hit a route that doesn&apos;t exist...😅</p>
      </div>
      <Button
        className=""
        text="Back to Posts Page"
        handleClick={
          // Attempt to recover by trying to re-render the segment
          () => router.push('/posts')
        }
      />
    </section>
  );
}
