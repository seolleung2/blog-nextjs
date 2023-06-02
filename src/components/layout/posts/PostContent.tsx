import React from 'react';
import MarkdownViewer from '@components/markdownViewer';
import Utterances from '@components/utterances';
import MarkdownHeader from '@components/markdownHeader';
import TableOfContents from '@components/toc';
import { Blog } from '@interfaces/Blog';

type Props = {
  blog: Blog;
};

const utterancesRepo = 'seolleung2/blog-nextjs';

export default function PostContent({ blog }: Props) {
  return (
    <section className="relative flex flex-col xl:flex-row xl:space-x-28">
      <article className="flex max-w-4xl grow flex-col gap-14">
        <MarkdownHeader blog={blog} />
        <MarkdownViewer content={blog.content} />
        <Utterances repo={utterancesRepo} path={blog.slug} />
      </article>
      <TableOfContents />
    </section>
  );
}
