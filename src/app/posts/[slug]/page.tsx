import React from 'react';
import { getBlogBySlug, getBlogs } from '@service/lib/blogs';
import PostContent from '@components/layout/posts/PostContent';
import Error from './error';

type Props = {
  params: {
    slug: string;
  };
};

// * 동적인 메타데이터 생성 generateMetadata
export const generateMetadata = async ({ params: { slug } }: Props) => {
  const blog = await getBlogBySlug(slug);
  if (!blog) return;

  return {
    title: `Blog | ${blog.title}`,
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const blog = await getBlogBySlug(slug);
  if (!blog) return <Error />;

  return <PostContent blog={blog} />;
}

export const generateStaticParams = async () => {
  const blogs = await getBlogs();
  return blogs.map(({ slug }) => ({
    slug,
  }));
};
