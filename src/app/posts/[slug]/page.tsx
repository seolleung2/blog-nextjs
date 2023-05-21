import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { getAllPosts, getPost, getPostData } from '@service/posts';

type Props = {
  params: {
    slug: string;
  };
};

// * 동적인 메타데이터 생성 generateMetadata
export const generateMetadata = async ({ params: { slug } }: Props) => {
  const post = await getPost(slug);
  if (!post) return;

  return {
    title: `Blog | ${post.title}`,
  };
};

// export const revalidate = 60;

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  if (!post) redirect('/posts');

  return (
    <section>
      <span>{post.date.toString()}</span>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <pre>{post.content}</pre>
    </section>
  );
}

export const generateStaticParams = async () => {
  // * 모든 블로그 포스트 세부 내용 페이지들을 미리 만들어 놓기 (SSG)
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.path,
  }));
};
