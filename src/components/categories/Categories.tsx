import CarouselCategories from './CarouselCategories';

type Props = {
  categories: string[];
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
};

export default function Categories({
  categories,
  currentCategory,
  setCurrentCategory,
}: Props) {
  const onCategoryClickHandler = (category: string) => {
    setCurrentCategory(category);
  };

  return (
    <div className="">
      <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl">
        Categories You&apos;ve Selected
      </h2>
      <CarouselCategories
        categories={categories}
        currentCategory={currentCategory}
        handleClick={onCategoryClickHandler}
      />
    </div>
  );
}
