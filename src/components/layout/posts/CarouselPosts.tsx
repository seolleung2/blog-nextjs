'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Blog } from '@interfaces/Blog';
import { PostsResponsive } from '@service/constant';
import PostItem from './PostItem';

type Props = {
  blogs: Blog[];
};

export default function CarouselPosts({ blogs }: Props) {
  return (
    <Carousel
      responsive={PostsResponsive}
      removeArrowOnDeviceType={['mobile']}
      containerClass="rounded-md pb-8"
      sliderClass="md:gap-4"
      itemClass=""
      showDots
      autoPlay
      infinite
    >
      {blogs.map((blog) => (
        <div key={blog.title}>
          <PostItem blog={blog} />
        </div>
      ))}
    </Carousel>
  );
}
