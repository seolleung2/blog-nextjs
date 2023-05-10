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

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const PostsResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};
