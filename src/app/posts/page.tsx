import { CategorizedPosts } from '@components/layout/posts';

import React from 'react';

export default function PostsPage() {
  return (
    <>
      <nav className="">
        <h2>Categories</h2>
        <ul>
          <li>All Posts</li>
          <li>Dev Environment</li>
          <li>Javascript</li>
          <li>React</li>
          <li>NextJS</li>
        </ul>
      </nav>
      {/* @ts-expect-error Async Server Component */}
      <CategorizedPosts />
    </>
  );
}
