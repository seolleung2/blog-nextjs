---
title: 쏙쏙 들어오는 함수형 코딩 3장 - 이미 있는 코드에 함수형 사고 적용하기
description: 함수형 사고가 적용되지 않은 코드를 확인해 보면서 코드 전체로 퍼져나간 액션이 어떤 영향을 줄 수 있는지 알아봅니다.
author: Dotori Jung 🌰
authorImage: /images/me.jpeg
coverImage: /images/functional-programming/functional-coding-book.jpeg
date: '2023-06-16 23:07:00'
categories: ['Functional Programming']
featured: true
---

## 액션이 코드 전체로 퍼질 때

이번 블로그 글의 주제는 개발자가 함수형 코드를 적용했다고 예시 코드를 보여줍니다. 하지만 사실은 코드 전체가 액션에 해당해서 실행시점(시간) 이나 횟수에 크게 의존하는 코드로 심각한 버그, 부수효과 들을 만들어 낼 수 있는 코드입니다.

## 이미 있는 코드를 보면서 함수형 사고 적용하기

책의 예시 코드는 어떤 개발자가 자회사에 수수료를 보내기 위해 만든 코드입니다. **_sendPayout()_** 함수는 실제 은행 계좌로 송금하는 액션입니다.

figurePayout 함수에서 100 달러 이하면 sendPayout 을 실행하여 송금을 하지 않기 때문에, sendPayout 함수만 액션이다 라고 주장합니다.

```js
function figurePayout(affiliate) {
  const owed = affiliate.sales * affiliate.commision;
  if (owed > 100) {
    // ! 과연 sendPayout 함수만 액션에 해당할까?
    sendPayout(affiliate.bank_code, owed);
  }
}

function affiliatePayout(affiliates) {
  for (let i = 0; i < affiliates.length; i++) {
    figurePayout(affiliates[i]);
  }
}

function main(affiliates) {
  affiliatePayout(affiliates);
}
```

1. **sendPayout(affiliate.bank_code, owed)** 함수는 실제 돈을 송금하는 코드이고 호출 시점이나 횟수가 중요하기 때문에 액션입니다.

2. 액션은 호출 시점이나 횟수에 의존하므로 **figurePayout()** 함수는 액션인 sendPayout() 함수를 호출하기 때문에 역시 호출 시점과 횟수에 의존하게 됩니다. 그래서 figurePayout() 함수 역시 액션이 됩니다.

3. 같은 논리로 **affiliatePayout()** 함수도 액션입니다.

4. 안에서 액션을 호출하는 main() 함수도 같은 논리로 액션이 되는 것을 피할 수 없었습니다.

결국, 코드 안쪽에 액션을 호출하는 작은 코드 하나가 전체 프로그램을 액션으로 만들었습니다. 즉, 액션을 부르는 함수가 있다면 그 함수도 액션이 되기 때문입니다.

## 느낀 점

책을 읽으면서 **액션, 계산, 데이터에 대한 정의**를 끊임없이 환기 시킨다는 느낌을 받았습니다. 예시 코드를 읽으면서 잘못된 코드를 짯군, 나는 이렇게 작성하지 않아 라고 생각할 수가 없었습니다.

오히려 제가 개발 업무를 하면서 무의식 적으로 코드를 작성해 나갈 때, 예시 코드와 비슷한 방식의 (액션이 함수 전체로 퍼져 나가는) 코드 스타일을 사용하고 이것을 "리팩토링" 이다 라고 말하고 있었는지도 모르겠습니다.

![](/images/functional-programming/whatabout.png)

액션에서는 호출 시점과 횟수가 중요하고 이에 따라 부수 효과를 만들어내고 영향을 받는 것 또한 액션이기 때문에 아래의 사항을 유의해야 한다고 여겼습니다.

가령 API 호출을 통해 데이터를 저장해야 하는데, 사용자가 어떤 이벤트를 하기 전에 요청이 일어난다든지 - 요청을 한 번만 해야 하는데 이메일 알림 요청을 두 번 이상 하게 된다든지 가 액션을 사용했을 때 가장 유의해야 할 점이기 때문에, 함수형 코드에서는 바로 이 액션을 가능하면 조심스럽게 사용해야 되는 것이라 이해했습니다.

데이터나 계산은 실행 시점이나 횟수에 의존하지 않으므로 가능한 액션을 계산으로 쪼개고, 계산을 데이터로 계획하는 식의 함수형 코딩 방식을 잘 이해해야 겠습니다.

아래는 추가로 검색해 보다가 다른 분이 제가 읽고 있는 책을 이미 읽고 정리해 놓은 글을 첨부해 보았습니다.

[참고하기 - [FE] '함수형 코딩' 책을 읽고 정리해보았습니다. #1812](https://github.com/orgs/woowacourse-precourse/discussions/1812)
