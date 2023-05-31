import fs from 'fs';
import { join, basename } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import { MarkdownItem } from '@interfaces/Markdown';

const getDir = (path: string) => join(process.cwd(), path);

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
};

const pushAllFilePathsOnArrayByRecursive = (
  dir: string,
  filePaths: string[]
) => {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((file, idx) => {
    const path = `${dir}/${file.name}`;

    if (file.isDirectory()) {
      pushAllFilePathsOnArrayByRecursive(path, filePaths);
    } else {
      filePaths.push(path);
    }
  });
};

const getAllFilePaths = (dir: string) => {
  const allFilePaths: string[] = [];
  pushAllFilePathsOnArrayByRecursive(dir, allFilePaths);

  return allFilePaths;
};

const getAllFileNameWithExtension = (dir: string) => {
  const result = (getAllFilePaths(dir) || []).map((filePath) =>
    basename(filePath)
  );
  return result;
};

const getItemInPath = (filePath: string): MarkdownItem => {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContent);
  return {
    ...data,
    content,
  } as MarkdownItem;
};

const getAllItems = (
  fileNames: string[],
  get: (name: string) => MarkdownItem
) => {
  const items = fileNames
    .map((name) => get(name))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .reverse();

  return items;
};

const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).use(remarkGfm).process(markdown);
  return result.toString();
};

export {
  getDir,
  getFileNames,
  getAllFilePaths,
  getAllFileNameWithExtension,
  getItemInPath,
  getAllItems,
  markdownToHtml,
};
