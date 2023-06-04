import React from 'react';
import MarkdownViewer from '@components/markdownViewer';
import Utterances from '@components/utterances';
import MarkdownHeader from '@components/markdownHeader';
import TableOfContents from '@components/toc';
import BlogNavigator from '@components/navigator';
import { utterancesRepo } from '@service/constant';
import { Blog } from '@interfaces/Blog';

type Props = {
  blog: Blog & { prev: Blog | null; next: Blog | null };
};

export default function PostContent({ blog }: Props) {
  const { prev, next } = blog;

  return (
    <section className="relative flex flex-col xl:flex-row xl:space-x-28">
      <article className="flex max-w-4xl grow flex-col gap-14">
        <MarkdownHeader blog={blog} />
        <MarkdownViewer content={blog.content} />
        <BlogNavigator prev={prev} next={next} />
        <Utterances repo={utterancesRepo} path={blog.slug} />
      </article>
      <TableOfContents />
    </section>
  );
}
