import React from 'react';
import { Post } from '@service/posts';
import PostItem from './PostItem';

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {posts.map((post) => (
        <li key={post.title}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
}
