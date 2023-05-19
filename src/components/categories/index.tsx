'use client';

import { CategoriesResponsive } from '@service/constant';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsFastForwardCircle, BsSkipBackwardCircle } from 'react-icons/bs';
import { ArrowProps } from 'react-multi-carousel/lib/types';

export default function Categories() {
  return (
    <div className="">
      <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl">
        Categories
      </h2>
      <Carousel
        responsive={CategoriesResponsive}
        containerClass="p-1"
        sliderClass="space-x-5"
        itemClass="max-w-fit"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        focusOnSelect
      >
        <span className="inline-block cursor-pointer rounded-md border border-rose-400 bg-rose-100 px-2 py-1 font-semibold text-rose-700 transition-all duration-300 hover:origin-bottom hover:-rotate-3 hover:bg-rose-200">
          All Posts
        </span>
        <span className="inline-block cursor-pointer rounded-md border border-orange-400 bg-orange-100 px-2 py-1 font-semibold text-orange-700 transition-all duration-300 hover:origin-bottom hover:-rotate-3 hover:bg-orange-200">
          Dev Environment
        </span>
        <span className="inline-block cursor-pointer rounded-md border border-yellow-400 bg-yellow-100 px-2 py-1 font-semibold text-yellow-700 transition-all duration-300 hover:origin-bottom hover:-rotate-3 hover:bg-yellow-200">
          Javascript
        </span>
        <span className="inline-block cursor-pointer rounded-md border border-green-400 bg-green-100 px-2 py-1 font-semibold text-green-700 transition-all duration-300 hover:origin-bottom hover:-rotate-3 hover:bg-green-200">
          Typescript
        </span>
        <span className="inline-block cursor-pointer rounded-md border border-blue-400 bg-blue-100 px-2 py-1 font-semibold text-blue-700 transition-all duration-300 hover:origin-bottom hover:-rotate-3 hover:bg-blue-200">
          ReactJS
        </span>
        <span className="inline-block cursor-pointer rounded-md border border-indigo-400 bg-indigo-100 px-2 py-1 font-semibold text-indigo-700 transition-all duration-300 hover:origin-bottom hover:-rotate-3 hover:bg-indigo-200">
          NextJS
        </span>
        <span className="inline-block cursor-pointer rounded-md border border-violet-400 bg-violet-100 px-2 py-1 font-semibold text-violet-700 transition-all duration-300 hover:origin-bottom hover:-rotate-3 hover:bg-violet-200">
          Refactoring
        </span>
      </Carousel>
    </div>
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
