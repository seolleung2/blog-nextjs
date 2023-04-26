export type Category = {
  id: string;
  category: string;
  link: string;
};

export const CATEGORIES: Category[] = [
  {
    id: '1',
    category: 'Home',
    link: '/',
  },
  {
    id: '2',
    category: 'About',
    link: '/about',
  },
  {
    id: '3',
    category: 'Posts',
    link: '/posts',
  },
  {
    id: '4',
    category: 'Contact',
    link: '/contact',
  },
];
