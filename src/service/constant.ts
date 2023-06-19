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

export type DetailExperienceItemType = {
  title: string;
  img_url: string;
  description_first: string;
  description_second: string;
};

export const DETAIL_EXPERIENCE_ITEMS: DetailExperienceItemType[] = [
  {
    title: '외식조리학전공',
    img_url: '/images/culinary-arts.jpeg',
    description_first:
      '요리, 만드는 것을 좋아해서 대전에 소재한 조리학과에서 공부했습니다.',
    description_second:
      '인도 커리 팝업 스토어를 운영해보았던 경험, 와인 클래스를 통해 와인에 눈을 뜨게 된 계기의 시작이였습니다.',
  },
  {
    title: '5602부대🦅',
    img_url: '/images/1st-brigade.jpeg',
    description_first:
      '훈련소에서 각잡은 사람이 제 이름을 호명했던 것이 떠오릅니다.',
    description_second:
      '비행기에서 30키로 낙하산을 메고 뛰어내린 경험🪂 은 선택받은 기분이 들기에 충분했습니다.',
  },
  {
    title: 'Commis Cook in SG',
    img_url: '/images/merlion.jpeg',
    description_first:
      '정부해외인턴사업 인터뷰에 합격해 싱가폴에서 Commis Cook 으로 근무했습니다.',
    description_second:
      '어려움을 극복해보고 여행해 보며 그 자체로 좋은 추억, 경험이 되었습니다.',
  },
  {
    title: '식품회사 연구원의 일상',
    img_url: '/images/food-industry.jpg',
    description_first:
      '소스 (소스코드 X) 개발을 주력으로 하는 식품회사에서 6년여간 근무한 경험을 가지고 있습니다.',
    description_second:
      '대형마트에 제가 개발한 제품을 보고 뿌듯함을 느꼈던 추억이 있습니다.',
  },
];

export const utterancesRepo = 'seolleung2/dotorimook-log';

export const GOOGLE_VERIFICATION_CODE =
  'h5hXfhgh2YyYCX6iW7D3Bwbw9z4pIU5ypnJg2sbX-ZM';

export const NAVER_VERIFICATION_CODE =
  '9920e281caffbb58f2bf2c372d244f0aaa60d3c0';
