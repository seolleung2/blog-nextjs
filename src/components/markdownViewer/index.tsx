'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

type Props = {
  content: string;
};

export default function MarkdownViewer({ content }: Props) {
  return (
    <ReactMarkdown
      className="markdown-viewer prose min-w-full lg:prose-lg dark:text-white"
      linkTarget="_blank"
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={dracula}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
        img: (image: any) => (
          <Image
            className="max-h-[512px] w-full object-contain"
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={350}
          />
        ),
        strong: ({ children }) => {
          return (
            <strong className="rounded-sm bg-gray-200 px-1.5 py-0.5 text-rose-400">
              {children}
            </strong>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
