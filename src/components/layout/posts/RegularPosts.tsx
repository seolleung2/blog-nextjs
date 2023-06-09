import React from 'react';
import { getRegularBlogs } from '@service/lib/blogs';
import CarouselPosts from './CarouselPosts';

export default async function RegularPosts() {
  const blogs = await getRegularBlogs();
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl dark:text-white">
        You May Like
      </h2>
      <CarouselPosts blogs={blogs} />
    </section>
  );
}
