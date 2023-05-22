import React from 'react';
import { redirect } from 'next/navigation';
import { getBlogBySlug, getBlogs } from '@service/lib/blogs';
import MarkdownViewer from '@components/markdownViewer';

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
  if (!blog) redirect('/posts');

  return (
    <section>
      <MarkdownViewer content={blog.content} />
    </section>
  );
}

export const generateStaticParams = async () => {
  const blogs = await getBlogs();
  return blogs.map(({ slug }) => ({
    slug,
  }));
};
