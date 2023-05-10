import React from 'react';
import { getRegularPosts } from '@service/posts';
import CarouselPosts from './CarouselPosts';

export default async function RegularPosts() {
  const posts = await getRegularPosts();
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl">
        You May Like
      </h2>
      <CarouselPosts posts={posts} />
    </section>
  );
}
