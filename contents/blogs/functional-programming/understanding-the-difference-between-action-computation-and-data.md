---
title: 쏙쏙 들어오는 함수형 코딩 3장 - 쿠폰 보내는 과정 구현하고 이해하기
description: 각 구독자의 추천 횟수에 따라 혜택이 큰 쿠폰을 보내는 과정을 코드로 작성해 보면서 액션, 계산 그리고 데이터에 대해 이해해 봅니다.
author: Dotori Jung 🌰
authorImage: /images/me.jpeg
coverImage: /images/functional-programming/functional-coding-book.jpeg
date: '2023-06-15 20:39:00'
categories: ['Functional Programming']
featured: true
---

## 서비스에서 사용자에게 쿠폰을 이메일로 보내는 프로그램을 만든다면?

책을 읽어보면 설명이 자세히 나와 있는데 뭐랄까 직접 코드를 보면서 아 이게 액션이고 계산이구나 를 이해하는 편이 조금 더 이해도가 높아지는 것을 느꼈습니다.

더불어 직접 코드를 따라 쳐 보면서 이해하는 것은 좀 더 확실히 와닿은 느낌이였습니다. 책에서는 "쿠폰독" 이라는 임의의 서비스 회사가 쿠폰에 관심 있는 구독자들에게 이메일로 쿠폰을 매주 보내주는 서비스를 한다 가정하고 있습니다.

서비스의 개별 사용자 마다 "쿠폰독" 서비스를 친구, 지인에게 추천한 횟수를 가지고 있습니다. 이러한 각 사용자의 서비스 추천 횟수에 따라 차등 지급되는 쿠폰을 보내는 과정을 코드로 작성해 보면서 액션, 계산, 그리고 데이터에 대해 이해해 보았습니다.

**사용자의 추천 횟수가 10명 이상이면 "best" 쿠폰을, 그 반대인 경우는 "good" 쿠폰을 사용자에게 전달 해주는 방식으로요.**

![](/images/functional-programming/thumbnail.jpeg)

## 코드를 작성하기 전 생각해 보기

코드를 작성하기 전에 어떤 것을 알아야 하고 무엇을 결정하거나 어떤 것을 해야 할지 미리 적어 보았습니다.

아래 항목들을 액션과 계산, 데이터로 미리 구별해 보는 연습도 도움이 되었습니다.

- 이메일 보내기
- 데이터베이스에서 구독자 가져오기
- 쿠폰에 등급 매기기
- 데이터베이스에서 쿠폰 읽기
- 이메일 제목
- 이메일 주소
- 추천 수
- 어떤 이메일이 쿠폰을 받을지 결정하기
- 구독자 DB 레코드
- 쿠폰 DB 레코드
- 쿠폰 목록 DB 레코드
- 구독자 목록 DB 레코드
- 이메일 본문

아래는 서비스를 위해 가져와야 하는 데이터베이스 테이블 이며 그 자체로 "데이터" 에 해당하는 항목 입니다.

### 이메일 (구독자) 데이터베이스 테이블

| email             | rec_count |
| ----------------- | --------- |
| john@coldmail.com | 2         |
| sam@pmail.co      | 16        |
| linda1989@oal.com | 1         |
| jan1940@ahoy.com  | 0         |
| mrbig@pmail.co    | 25        |
| lol@lol.lol       | 1         |

### 쿠폰 데이터베이스 테이블

| coupon          | rank |
| --------------- | ---- |
| MAYDISCOUNT     | good |
| 10PERCENT       | bad  |
| PROMOTION45     | best |
| IHEARTYOU       | bad  |
| GETADEAL        | best |
| ILIKEDDISCOUNTS | good |

## 쿠폰 보내는 과정 구현하기

![](/images/functional-programming/coupon.webp)

"구독자", "쿠폰등급" 데이터를 가지고 구독자의 쿠폰 등급을 결정하는 코드를 작성합니다.

### 1. 구독자의 쿠폰 등급을 계산하기

**구독자의 쿠폰 등급을 결정** 하는 것은 함수로 구현하며, 호출 시점이나 횟수에 의존하지 않고 동일한 입력값으로 부르면 항상 같은 결괏값을 보여주는 **"계산" 에 해당**하는 점에 유의합니다.

어떤 구독자가 어떤 등급의 쿠폰을 받을지 결정하는 것을 아래의 함수 **subCouponRank** 로 구현했습니다.

```js
function subCouponRank(subscriber) {
  if (subscriber.rec_count >= 10) return 'best';
  return 'good';
}
```

### 2. 전체 쿠폰 목록에서 주어진 특정 등급의 쿠폰 목록만 선택하기

특정 등급의 쿠폰을 선택하는 것도 **"계산"** 에 해당하며 함수로 구현합니다. 입력값은 전체 쿠폰 목록과 선택할 등급이 순서대로 들어가며 출력값은 선택한 등급을 가진 쿠폰 목록입니다.

```js
function selectCouponsByRank(coupons, rank) {
  const ret = [];
  for (let c = 0; c < coupons.length; c++) {
    var coupon = coupons[c];
    if (coupon.rank === rank) {
      ret.push(coupon.code);
    }
  }
  return ret;
}
```

**selectCouponsByRank()** 함수가 계산에 해당하는 이유는 같은 쿠폰 목록과 등급을 넣으면 항상 같은 쿠폰 목록이 나옵니다. 함수에 대한 호출 횟수가 영향을 주지 않으며, 아무리 호출해도 외부에 어떠한 영향을 주지 않는 selectCouponsByRank 함수는 계산입니다.

### 3. 구독자가 받을 이메일을 계획하는 계산

"구독자", "good 쿠폰 목록", "best 쿠폰 목록", "이메일" 의 데이터를 가지고 쿠폰 등급이 "good" 이면 good 이메일을 만들고, 쿠폰 등급이 "best" 이면 best 이메일을 만드는 계산을 마찬가지로 함수로 구현했습니다.

해당 계산은 다이어그램 전체에서 가장 중요한 부분을 차지합니다.

```js
function emailForSubscriber(subscriber, goods, bests) {
  const rank = subCouponRank(subscriber); // 구독자의 쿠폰 등급을 가져오기

  if (rank === 'best') {
    return {
      from: 'newsletter@coupondog.co',
      to: subscriber.email,
      subject: 'Your best weekly coupons inside',
      body: 'Here are the best coupons: ' + bests.join(', '),
    };
  }

  return {
    from: 'newsletter@coupondog.co',
    to: subscriber.email,
    subject: 'Your best weekly coupons inside',
    body: 'Here are the good coupons: ' + goods.join(', '),
  };
}
```

구독자에 대한 이메일을 만드는 함수이기 때문에 구독자를 인자로 받아야 하며, 구독자가 받아야할 쿠폰이 good 쿠폰 목록인지 best 쿠폰 목록일지 미리 알 수 없기 때문에 good 쿠폰 목록과 best 쿠폰 목록을 모두 입력값으로 받아야 합니다. 그리고 결괏값은 이메일 데이터 입니다.

### 4. 구독자들의 목록으로 전체 이메일 목록을 만드는 계산

```js
function emailsForSubscribers(subscribers, goods, bests) {
  const emails = [];
  for (let s = 0; s < subscribers.length; s++) {
    const subscriber = subscribers[s];
    const email = emailForSubscriber(subscriber, goods, bests);
    emails.push(email);
  }
  return emails;
}
```

### 5. 이매일을 보내는 액션 구현하기

일반적으로 액션도 계산처럼 함수로 구현하므로, 함수만 보고 계산인지 액션인지 알아보기 쉽지 않습니다. 액션으로 모든 기능 (계산, 데이터 혹은 다른 액션) 을 하나로 묶습니다.

```js
function sendIssue() {
  const coupons = fetchCouponsFromDB();
  const goodCoupons = selectCouponsByRank(coupons, 'good');
  const bestCoupons = selectCouponsByRank(coupons, 'best');
  const subscribers = fetchSubscribersFromDB();
  const emails = emailsForSubscribers(subscribers, goodCoupons, bestCoupons);

  for (let e = 0; e < emails.length; e++) {
    const email = emails[e];
    emailSystem.send(email);
  }
}
```

## 코드를 구현하고 나서

데이터를 파악하는 것부터 시작해서 계산과 추가 데이터를 도출하고 마지막에 액션으로 모든 것을 묶었습니다.

데이터는 사용하는 데 제약이 많고 액션은 가장 제약이 없습니다. 이와 같이 데이터를 먼저 구현하고 계산을 구현한 후에 마지막으로 액션을 구현하는 것이 함수형 프로그래밍의 일반적인 구현 순서입니다.

계산은 입력값이 같으면 출력값도 항상 동일한 데서 어려운 말로 "순수 함수" 라 포현하고 액션은 "순수하지 않은 함수", "부수 효과가 있는 함수" 로 이해하는 정도에서 코드를 직접 작성해 보면서 어렴풋이나마 느낌을 잡을 수 있었다고 생각합니다.
