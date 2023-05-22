'use client';

import React, { useState } from 'react';
import { Blog } from '@interfaces/Blog';
import { Categories } from '@components/categories';
import PostList from './PostList';

type Props = {
  blogs: Blog[];
  categories: string[];
};

const ALL_POSTS = 'All';

export default function CategorizedPosts({ blogs, categories }: Props) {
  const [currentCategory, setCurrentCategory] = useState<string>(ALL_POSTS);

  const filteredPosts =
    currentCategory === ALL_POSTS
      ? blogs
      : blogs.filter((blog) => blog.categories.includes(currentCategory));

  return (
    <section>
      <Categories
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <article className="mt-6">
        <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl">
          {currentCategory} Posts
        </h2>
        <PostList blogs={filteredPosts} />
      </article>
    </section>
  );
}
