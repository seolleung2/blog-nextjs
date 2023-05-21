import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  categories: string[];
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string };

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getRegularPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return getAllPosts().then((posts) =>
    posts.find(({ path }) => path.toLowerCase() === slug)
  );
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(
    process.cwd(),
    'contents',
    'blogs',
    `${fileName}.md`
  );

  const metadata = await getAllPosts() //
    .then((posts) => posts.find(({ path }) => path.toLowerCase() === fileName));

  if (!metadata) throw new Error(`There is no post related to ${fileName}`);

  const content = await readFile(filePath, 'utf-8');
  return {
    ...metadata,
    content,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');

  return readFile(filePath, 'utf8')
    .then<Post[]>((data) => JSON.parse(data))
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
