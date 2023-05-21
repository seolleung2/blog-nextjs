'use client';

import React, { useState } from 'react';
import { Categories } from '@components/categories';
import { Post } from '@service/posts';
import PostList from './PostList';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = 'All';

export default function CategorizedPosts({ posts, categories }: Props) {
  const [currentCategory, setCurrentCategory] = useState<string>(ALL_POSTS);

  const filteredPosts =
    currentCategory === ALL_POSTS
      ? posts
      : posts.filter((post) => post.categories.includes(currentCategory));

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
        <PostList posts={filteredPosts} />
      </article>
    </section>
  );
}
