import React from 'react';
import { redirect } from 'next/navigation';
import { getBlogBySlug, getBlogs } from '@service/lib/blogs';
import PostContent from '@components/layout/posts/PostContent';
import ErrorBoundary from '@components/Error';
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
  if (!blog) redirect('/posts'); // OR Render 404 Page

  return (
    <ErrorBoundary fallback={<Error />}>
      <PostContent blog={blog} />
    </ErrorBoundary>
  );
}

export const generateStaticParams = async () => {
  const blogs = await getBlogs();
  return blogs.map(({ slug }) => ({
    slug,
  }));
};
