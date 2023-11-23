---
title: 모던 리액트 Deep Dive 리뷰
description: 위키북스에서 진행한 모던 리액트 Deep Dive 서포터즈 1기에 선정되어 책 리뷰, 느낀 점을 작성해 보았습니다.
author: Dotori Jung 🌰
authorImage: /images/me.jpeg
coverImage: /images/react-deep-dive/book-review/book-cover.jpeg
date: '2023-11-23 14:10:00'
categories: ['독서', '개발']
featured: false
---

## 🧵 리뷰 전에

먼저 저를 간단히 소개하자면 개발 경력이 2년 정도 지난 주니어 프론트엔드 개발자 입니다.

현업에서 사용되는 프론트엔드 라이브러리, 프레임워크는 크게 Angular, Vue, React 가 있는데 리액트가 제일 많이 사용되고 있으며 실제 제가 현업에서 다루는 라이브러리는 리액트 이기도 하므로 스스로 익숙하고 잘 다룰 수 있다고 생각했습니다.

![](/images/react-deep-dive/book-review/other.jpeg)

현업에서 특정 업무를 받고 요구사항에 맞게 개발을 진행하다 보면 원리 보다는 구현에 먼저 초점을 맞춰서 빠르게 개발을 하게 되는 경우가 많이 생깁니다. 어쩔 수 없는 부분이기도 하지만, 그로 인해서 알아야 될 동작 원리라든가 깊은 이해를 바탕으로 한 구현의 부재 등등 알아야 될 많은 부분 들을 놓치고 있지 않는가 스스로 자문해 보게 되었습니다.

## 👑 리액트 Deep Dive 서포터즈 1기

그래서 최근 리뉴얼 된 리액트 공식문서를 읽고 구글 검색을 하며 나름의 이해한 사항들을 개인 문서에 정리해 나가던 중, 위키북스에서 주관한 모던 리액트 딥다이브 서포터즈 1기에 지원 및 선정이 되었습니다.

프론트엔드 개발자로서 리액트에 대한 기반을 탄탄히 하고 싶었는데 정말 좋은 기회라 여겨졌습니다.

## 📓 리뷰

![](/images/react-deep-dive/book-review/study-example.jpeg)
막상 책을 구매해 보니 책의 두께가 상당했습니다.
책을 처음 펼쳐 처음 만났던 페이지는 리액트 개발에서 정말 익숙한 useState 훅 파트 였습니다.

useState 의 동작 원리를 독자들에게 이해 시키고자 클로저 개념과 예시 코드를 들어 설명해 놓은 부분이 매우 인상깊었습니다.

책에서 소개된 나머지 다른 부분들도 책 제목에 포함된 Deep Dive 에 걸맞는 상세한 설명을 담고 있습니다.

프론트엔드 개발자로서 스스로 놓치고 있었던 부분이나 평소 잘 알았다고 생각했던 부분을 좀 더 깊게 이해할 수 있도록 친절하게 설명되어 있는 좋은 길잡이 책이라고 생각합니다.

필요한 기술에 대한 항목을 공부하고 개인 노션, 블로그에 정리해 나가는 방식으로 학습해 보려 합니다. 감사합니다.

### ⛑️ 여기서 잠시! Closure 개념에 대해 알아보기

클로저(Closure)는 함수가 정의될 때의 환경을 기억하여, 함수가 이 환경을 벗어난 후에도 그 환경에 접근할 수 있게 하는 개념입니다. 간단히 말하면, 함수가 자신이 선언된 스코프 외부에서 호출되더라도 해당 함수가 선언될 때의 환경(변수, 매개변수 등)을 기억하는 것을 의미합니다.

클로저는 주로 다른 함수 내에서 함수를 반환하거나, 함수를 매개변수로 전달할 때 자주 나타나는 패턴입니다.

```javascript
function handleIncreaseByOne() {
  let privateValue = 1;

  return () => {
    privateValue = privateValue + 1;
    return privateValue;
  };
}

const increase = handleIncreaseByOne();

console.log(increase()); // 익명 함수를 리턴하므로 리턴된 함수를 실행. 2
console.log(increase()); // 3
```

increase 변수에 할당된 함수 handleIncreaseByOne 는 생성 당시 내부의 클로저 함수 외부 스코프에 있는 변수 privateValue 를 기억해 호출될 때마다 privateValue 값에 접근 가능합니다.

privateValue 변수의 값은 함수 외부에서는 접근이 불가능 하기에 말 그대로 private 한 변수를 가질 수 있습니다.
