import { PageBanner } from '@components/layout';
import { FeaturedPosts } from '@components/layout/posts';

export default function Home() {
  return (
    <section>
      <PageBanner />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
    </section>
  );
}
