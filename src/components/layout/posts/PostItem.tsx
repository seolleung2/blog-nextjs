import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@service/posts';
import { MONTH_NAMES } from '@service/constant';
import postImage from '../../../../public/images/main2.png';

type Props = {
  post: Post;
};

export default function PostItem({
  post: { path, title, categories, description, date },
}: Props) {
  const fullDate = new Date(date);
  const monthIndex = fullDate.getMonth();
  const blogDate = fullDate.getDate();

  return (
    <Link href={`/posts/${path}`}>
      <article className="group relative flex h-32 w-full cursor-pointer select-none rounded-lg bg-white px-1 shadow-lg lg:h-80 lg:flex-col lg:p-2">
        <Image
          src={postImage}
          alt="post-thumbnail"
          className="hidden h-28 w-28 rounded-lg object-cover group-hover:brightness-110 xs:m-auto xs:block lg:h-1/2 lg:w-full"
        />
        <div className="my-2 ml-1 flex w-full flex-col justify-start px-1 py-2 lg:m-0 lg:h-1/2 lg:px-2">
          <div className="mb-1 line-clamp-1 text-xs font-medium text-rose-600 lg:text-sm">
            {categories.map((category, index) => (
              <span key={index}>#{category} </span>
            ))}
          </div>
          <h3 className="mb-1.5 line-clamp-2 text-sm font-bold group-hover:text-rose-600 lg:text-base lg:leading-snug">
            {title}
          </h3>
          <p className="line-clamp-2 text-xs lg:line-clamp-3 lg:text-sm lg:leading-snug">
            {description}
          </p>
        </div>
        <div className="absolute left-3 top-4 hidden h-16 w-16 flex-col items-center justify-center rounded-md bg-black/60 text-2xl leading-none text-white xs:group-hover:flex lg:flex">
          <span className="font-bold">{blogDate}</span>
          <span className="mt-1 text-xs">{MONTH_NAMES[monthIndex]}</span>
        </div>
      </article>
    </Link>
  );
}
