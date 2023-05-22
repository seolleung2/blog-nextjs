import React from 'react';
import { Blog } from '@interfaces/Blog';
import PostItem from './PostItem';

type Props = {
  blogs: Blog[];
};

export default function PostList({ blogs }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {blogs.map((blog) => (
        <li key={blog.title}>
          <PostItem blog={blog} />
        </li>
      ))}
    </ul>
  );
}
