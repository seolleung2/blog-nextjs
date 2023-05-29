import React from 'react';
import Image from 'next/image';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { Blog } from '@interfaces/Blog';

type Props = {
  blog: Blog;
};

export default function MarkdownHeader({ blog }: Props) {
  return (
    <div className="blog-detail-header">
      <div className="mb-2 flex flex-row justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only">{blog.author}</span>
              <div className="relative !mb-0 h-10 w-10">
                <Image
                  priority
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-full object-cover"
                  src={blog.authorImage}
                  alt="author-image"
                />
              </div>
            </a>
          </div>
          <div className="ml-3">
            <p className="!mb-0 text-sm font-medium text-gray-900">
              <a href="#" className="hover:underline">
                {blog.author}
              </a>
            </p>
            <div className="flex items-center space-x-1 text-gray-500">
              <AiTwotoneCalendar className="text-lg" />
              <time className="text-sm" dateTime={blog.date}>
                {blog.date}
              </time>
            </div>
          </div>
        </div>
        <div className="flex self-end">{/* Social Links Here */}</div>
      </div>
      <h1 className="mb-1 break-all text-2xl font-bold sm:text-4xl">
        {blog.title}
      </h1>
      <p className="blog-detail-header-subtitle my-4 text-lg text-gray-600 sm:text-xl">
        {blog.description}
      </p>
      <div className="relative mx-auto h-72 w-full bg-black sm:h-80 md:h-96">
        <Image
          priority
          fill
          className="object-cover"
          src={blog.coverImage}
          alt="cover-image"
        />
      </div>
    </div>
  );
}
