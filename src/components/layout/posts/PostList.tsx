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
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {posts.map((post) => (
        <li
          key={post.title}
          className="group flex h-32 w-full cursor-pointer select-none rounded-lg bg-white px-1 shadow-lg lg:h-96 lg:flex-col lg:p-2"
        >
          <Image
            src={postImage}
            alt="post-thumbnail"
            className="hidden h-28 w-28 rounded-lg object-contain group-hover:brightness-110 xs:m-auto xs:block lg:h-3/5 lg:w-full"
          />
          <div className="my-2 ml-1 flex w-full flex-col justify-start px-1 py-2 lg:m-0 lg:h-2/5 lg:px-2">
            <div className="mb-1 line-clamp-1 text-xs font-medium text-rose-600 lg:text-sm">
              {post.categories.map((category, index) => (
                <span key={index}>#{category} </span>
              ))}
            </div>
            <h3 className="mb-1.5 line-clamp-2 text-sm font-bold group-hover:text-rose-600 lg:text-base lg:leading-snug">
              {post.title}
            </h3>
            <p className="line-clamp-2 text-xs lg:line-clamp-3 lg:text-sm lg:leading-snug">
              {post.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
