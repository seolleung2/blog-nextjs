'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsFastForwardCircle, BsSkipBackwardCircle } from 'react-icons/bs';
import cn from 'classnames';
import { ArrowProps } from 'react-multi-carousel/lib/types';
import {
  CategoriesResponsive,
  ColorPaletteOfCategories,
} from '@service/constant';

type Props = {
  categories: string[];
  currentCategory: string;
  handleClick: (category: string) => void;
};

export default function CarouselCategories({
  categories,
  currentCategory,
  handleClick,
}: Props) {
  return (
    <Carousel
      responsive={CategoriesResponsive}
      removeArrowOnDeviceType={['mobile']}
      containerClass="p-1"
      sliderClass="space-x-5 items-center h-12"
      itemClass="max-w-fit"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {(categories || []).map((category, idx) => {
        const targetPalette = ColorPaletteOfCategories.find(
          (palette) => palette.id === idx % 7
        );

        return (
          <span
            key={idx}
            className={cn(
              'inline-block cursor-pointer rounded-md border px-2 py-1 font-semibold underline-offset-4 transition-all duration-300 hover:origin-bottom hover:-rotate-3 hover:underline',
              targetPalette?.border,
              targetPalette?.background,
              targetPalette?.color,
              targetPalette?.hover,
              currentCategory === category &&
                'border-4 border-double font-black underline decoration-double'
            )}
            onClick={handleClick.bind(null, category)}
          >
            {category === 'All' ? 'All Posts' : category}
          </span>
        );
      })}
    </Carousel>
  );
}

const CustomLeftArrow = ({ onClick }: ArrowProps) => {
  const handleClickLeftArrow = () => {
    onClick && onClick();
  };
  return (
    <BsSkipBackwardCircle
      className="absolute left-0 cursor-pointer rounded-full border bg-slate-200 text-2xl font-bold opacity-60 transition-opacity duration-700 hover:opacity-100"
      onClick={handleClickLeftArrow}
    />
  );
};

const CustomRightArrow = ({ onClick }: ArrowProps) => {
  const handleClickRightArrow = () => {
    onClick && onClick();
  };
  return (
    <BsFastForwardCircle
      className="absolute right-0 cursor-pointer rounded-full border bg-slate-200 text-2xl font-bold opacity-60 transition-opacity duration-700 hover:opacity-100"
      onClick={handleClickRightArrow}
    />
  );
};
