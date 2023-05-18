'use client';

import { CategoriesResponsive } from '@service/constant';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Categories() {
  return (
    <div className="">
      <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl">
        Categories
      </h2>
      <Carousel
        responsive={CategoriesResponsive}
        containerClass="border border-green-500 py-4"
        sliderClass="space-x-5"
        itemClass="max-w-fit"
      >
        <span className="inline-block rounded-md border border-rose-400 bg-rose-100 px-2 py-1 font-semibold text-rose-700">
          All Posts
        </span>
        <span className="inline-block rounded-md border border-orange-400 bg-orange-100 px-2 py-1 font-semibold text-orange-700">
          Dev Environment
        </span>
        <span className="inline-block rounded-md border border-yellow-400 bg-yellow-100 px-2 py-1 font-semibold text-yellow-700">
          Javascript
        </span>
        <span className="inline-block rounded-md border border-green-400 bg-green-100 px-2 py-1 font-semibold text-green-700">
          Typescript
        </span>
        <span className="inline-block rounded-md border border-blue-400 bg-blue-100 px-2 py-1 font-semibold text-blue-700">
          ReactJS
        </span>
        <span className="inline-block rounded-md border border-indigo-400 bg-indigo-100 px-2 py-1 font-semibold text-indigo-700">
          NextJS
        </span>
        <span className="inline-block rounded-md border border-violet-400 bg-violet-100 px-2 py-1 font-semibold text-violet-700">
          Refactoring
        </span>
      </Carousel>
    </div>
  );
}
