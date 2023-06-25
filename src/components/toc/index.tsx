'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';

export default function TOC() {
  const [indexList, setIndexList] = useState<{ index: string; size: number }[]>(
    []
  );
  const [currentIndex, setCurrentIndex] = useState<string>('');

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentIndex(entry.target.id);
        }
      });
    };

    const options = {
      rootMargin: '-64px 0px -40% 0px',
      threshold: 1,
    };

    const hNodeList = document.querySelectorAll('main h2, main h3');

    const IOList: IntersectionObserver[] = [];

    hNodeList.forEach((node) => {
      const index = node.textContent as string;
      const size = (+node.nodeName[1] - 1) * 20;
      setIndexList((prev) => {
        if (prev.map((v) => v.index).includes(index)) return prev;
        return [...prev, { index, size }];
      });

      node.id = index;

      const observer = new IntersectionObserver(observerCallback, options);
      observer.observe(node);

      IOList.push(observer);
    });

    return () => {
      IOList.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <aside
      className={classNames(
        'max-h-auto sticky top-36 hidden w-80 self-start overflow-auto px-4 py-2 xl:flex',
        indexList.length > 0 && 'border-l-4 border-purple-400'
      )}
    >
      <ul className="space-y-3">
        {indexList.map(({ index, size }) => (
          <li
            key={index}
            style={{
              // marginTop: size > 0 ? size / 2 + 'px' : '',
              paddingLeft: size + 'px',
              fontSize: 17 - size / 12 + 'px',
            }}
            className={classNames(
              'transition-all hover:text-blue-600',
              currentIndex === index ? 'scale-105 text-purple-400' : ''
            )}
          >
            <a href={`#${index}`}>{index}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
