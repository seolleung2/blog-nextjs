import { getBlogs } from '@service/lib/blogs';
import { CategorizedPosts } from '@components/layout/posts';

export default async function PostsPage() {
  const getAllCategories = () => {
    const allCategories: string[] = ['All'];
    blogs.forEach((blog) => {
      const { categories } = blog;
      categories.forEach((category) => {
        if (!allCategories.includes(category)) allCategories.push(category);
      });
    });
    return allCategories;
  };

  const blogs = await getBlogs();
  const categories = getAllCategories();

  return <CategorizedPosts blogs={blogs} categories={categories} />;
}
