import React from 'react';
import Image from 'next/image';
import { Post } from '@service/posts';
import postImage from '../../../../public/images/main2.png';

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  console.log('posts >>>>>', posts);
  return (
    <ul className="flex flex-col gap-3">
      {posts.map((post) => (
        <li
          key={post.title}
          className="flex h-32 w-full rounded-lg bg-white px-1 shadow-lg"
        >
          <Image
            src={postImage}
            alt="post-thumbnail"
            className="hidden h-28 w-28 rounded-lg xs:m-auto xs:block"
          />
          <div className="my-2 ml-1 flex w-full flex-col justify-between py-2">
            <div className="line-clamp-1 text-xs font-medium text-rose-600">
              {post.categories.map((category, index) => (
                <span key={index}>#{category} </span>
              ))}
            </div>
            <h3 className="line-clamp-2 text-sm font-bold">{post.title}</h3>
            <p className="line-clamp-2 text-xs">{post.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
