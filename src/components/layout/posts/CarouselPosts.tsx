'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Post } from '@service/posts';
import { PostsResponsive } from '@service/constant';
import PostItem from './PostItem';

type Props = {
  posts: Post[];
};

export default function CarouselPosts({ posts }: Props) {
  return (
    <Carousel
      responsive={PostsResponsive}
      removeArrowOnDeviceType={['mobile']}
      containerClass="rounded-md pb-8"
      sliderClass=""
      itemClass="md:pr-4"
      showDots
      autoPlay
      infinite
    >
      {posts.map((post) => (
        <div key={post.title}>
          <PostItem post={post} />
        </div>
      ))}
    </Carousel>
  );
}
