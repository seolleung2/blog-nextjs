import { Blog } from '@interfaces/Blog';
import {
  getDir,
  getAllFileNameWithExtension,
  getAllFilePaths,
  getAllItems,
  getItemInPath,
  markdownToHtml,
} from './md';

const BLOG_DIR = getDir('/contents/blogs');

const getBlogFileNames = () => {
  return getAllFileNameWithExtension(BLOG_DIR);
};

const getFullDirByFilename = (fileName: string) => {
  const allDirectories = getAllFilePaths(BLOG_DIR);
  const targetDir = allDirectories.find((dir) => dir.includes(fileName));

  return targetDir;
};

const getBlogsSlugs = (): string[] => {
  return getBlogFileNames().map((fileName: any) =>
    fileName.replace(/\.md$/, '')
  );
};

const getBlog = (fileName: string): Blog => {
  const fullDir = getFullDirByFilename(fileName) as string;

  const blog = getItemInPath(fullDir) as Blog;
  blog.slug = fileName.replace(/\.md$/, '');

  return blog;
};

const getBlogBySlug = (slug: string) => {
  const allBlogs = getBlogs();

  const blog = allBlogs.find((blog) => blog.slug === slug);

  if (!blog)
    throw new Error(`${slug}에 해당하는 블로그 내용을 찾을 수 없습니다.`);

  const fileName = slug + '.md';

  const index = allBlogs.indexOf(blog);
  const next = index > 0 ? allBlogs[index - 1] : null;
  const prev = index < allBlogs.length - 1 ? allBlogs[index + 1] : null;

  return {
    ...getBlog(fileName),
    next,
    prev,
  };
};

const getBlogs = (): Blog[] => {
  const names = getBlogFileNames();
  return getAllItems(names, getBlog as (name: string) => Blog) as Blog[];
};

const getFeaturedBlogs = (): Blog[] => {
  const allBlogs = getBlogs();
  return allBlogs.filter((blog) => blog.featured) as Blog[];
};

const getRegularBlogs = (): Blog[] => {
  const allBlogs = getBlogs();
  return allBlogs.filter((blog) => !blog.featured) as Blog[];
};

const getBlogBySlugWithMarkdown = async (
  slug: string
): Promise<Blog | null> => {
  const blog = getBlogBySlug(slug);

  if (blog) {
    blog.content = await markdownToHtml(blog.content);
    return blog;
  }

  return null;
};

export {
  getBlogFileNames,
  getFeaturedBlogs,
  getRegularBlogs,
  getBlogs,
  getBlog,
  getBlogsSlugs,
  getBlogBySlug,
  getBlogBySlugWithMarkdown,
};
