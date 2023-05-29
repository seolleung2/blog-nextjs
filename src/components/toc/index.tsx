'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';

export default function TOC() {
  // 목차 리스트 ( index: 목차, size: 목차의 크기 ( h1~h6는 크기를 다르게 렌더링해주기 위함 ) )
  const [indexList, setIndexList] = useState<{ index: string; size: number }[]>(
    []
  );

  // 현재 보이는 목차 ( 강조 표시 해주기 위함 )
  const [currentIndex, setCurrentIndex] = useState<string>('');

  useEffect(() => {
    // 1. <main> 내부에서만 목차를 만들거라서 <main> 선택
    // 2. <h2>, <h3> 찾기 ( h4 ~ h6는 사용 x )
    const hNodeList = document
      .querySelector('main')
      ?.querySelectorAll('h2, h3') as NodeListOf<Element>;

    // IntersectionObserver들이 들어갈 배열 ( 이벤트 해제를 위해 )
    const IOList: IntersectionObserver[] = [];
    let IO: IntersectionObserver;

    [...hNodeList].forEach((node) => {
      // 목차 내용이랑 사이즈 구해서 저장
      const index = node.textContent as string;
      const size = (+node.nodeName[1] - 1) * 20;
      setIndexList((prev) => {
        if (prev.map((v) => v.index).includes(index)) return prev;
        return [...prev, { index, size }];
      });

      // 3. 각 <h*>에 id로 현재 컨텐츠 내용 추가
      node.id = index;

      // 5. 화면에 보이면 강조되도록 "IntersectionObserver" 등록
      IO = new IntersectionObserver(
        ([
          {
            isIntersecting,
            target: { textContent },
          },
        ]) => {
          if (!isIntersecting) return;
          setCurrentIndex(textContent!);
        },
        {
          // rootMargin: '-64px 0px -40% 0px',
          threshold: 1,
        }
      );
      IO.observe(node);

      // 이벤트 해제를 위해 등록
      IOList.push(IO);
    });

    // 이벤트 해제
    return () => IOList.forEach((IO) => IO.disconnect());
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
