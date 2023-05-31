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

const getBlog = (fileName: string): Blog | null => {
  const fullDir = getFullDirByFilename(fileName) as string;

  if (fullDir) {
    const blog = getItemInPath(fullDir) as Blog;
    blog.slug = fileName.replace(/\.md$/, '');

    return blog;
  }

  return null;
};

const getBlogBySlug = (slug: string) => {
  const fileName = slug + '.md';
  return getBlog(fileName);
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
