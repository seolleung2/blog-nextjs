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

export const CategoriesResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 3,
  },
};

export const ColorPaletteOfCategories = [
  {
    id: 0,
    border: 'border-rose-400',
    background: 'bg-rose-100',
    color: 'text-rose-700',
    hover: 'bg-rose-200',
  },
  {
    id: 1,
    border: 'border-orange-400',
    background: 'bg-orange-100',
    color: 'text-orange-700',
    hover: 'bg-orange-200',
  },
  {
    id: 2,
    border: 'border-yellow-400',
    background: 'bg-yellow-100',
    color: 'text-yellow-700',
    hover: 'bg-yellow-200',
  },
  {
    id: 3,
    border: 'border-green-400',
    background: 'bg-green-100',
    color: 'text-green-700',
    hover: 'bg-green-200',
  },
  {
    id: 4,
    border: 'border-blue-400',
    background: 'bg-blue-100',
    color: 'text-blue-700',
    hover: 'bg-blue-200',
  },
  {
    id: 5,
    border: 'border-indigo-400',
    background: 'bg-indigo-100',
    color: 'text-indigo-700',
    hover: 'bg-indigo-200',
  },
  {
    id: 6,
    border: 'border-violet-400',
    background: 'bg-violet-100',
    color: 'text-violet-700',
    hover: 'bg-violet-200',
  },
];

export const utterancesRepo = 'seolleung2/dotorimook-log';

export const GOOGLE_VERIFICATION_CODE =
  'h5hXfhgh2YyYCX6iW7D3Bwbw9z4pIU5ypnJg2sbX-ZM';

export const NAVER_VERIFICATION_CODE =
  '9920e281caffbb58f2bf2c372d244f0aaa60d3c0';
