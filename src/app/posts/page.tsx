import { CategorizedPosts } from '@components/layout/posts';
import { getAllPosts } from '@service/posts';

export default async function PostsPage() {
  const getAllCategories = () => {
    const allCategories: string[] = ['All'];
    posts.forEach((post) => {
      const { categories } = post;
      categories.forEach((category) => {
        if (!allCategories.includes(category)) allCategories.push(category);
      });
    });
    return allCategories;
  };

  const posts = await getAllPosts();
  const categories = getAllCategories();

  return <CategorizedPosts posts={posts} categories={categories} />;
}
