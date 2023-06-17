---
title: 쏙쏙 들어오는 함수형 코딩 4장 - 액션에서 계산 빼내기
description: 함수의 입력과 출력, 암묵적 입력과 압묵적 출력에 대해 이해하고 테스트하기 쉽고 재사용성이 좋은 코드를 만들기 위한 함수형 기술에 대해 알아봅니다.
author: Dotori Jung 🌰
authorImage: /images/me.jpeg
coverImage: /images/functional-programming/functional-coding-book.jpeg
date: '2023-06-17 21:21:00'
categories: ['Functional Programming']
featured: true
---

## 4장을 읽고 (자체 요약)

책의 4장을 읽다보니 리팩토링을 위해 함수를 분리하는 과정에 대해서는 적용해 본 경험이 있어 이해하기 좋았고 익숙하다는 느낌을 받았습니다.

하지만 원 모어 띵이 더 있었습니다. 앞서 학습을 하면서 "계산" 의 정의에 대해 알아봤었습니다.

> 계산 : 입력값으로 출력값을 만들며 실행 시점과 횟수에 관계없이 항상 같은 입력값에 같은 출력값을 돌려줍니다.

![](/images/functional-programming/230617.jpeg)

함수 내에서 전역 변수를 읽어들이는 것은 **암묵적 입력**에 해당하며, 함수 내에서 전역 변수의 값을 직접 변경하는 것은 **암묵적 출력** 이라는 이름으로 부른다는 것을 알게 되었습니다.

함수의 인자를 통해 출력 리턴값을 만들어 내는 것은 순수함수, 즉 계산에 해당하지만 - 암묵적 입력이나 암묵적 출력 (부수 효과) 이 존재 할 시 해당 함수는 액션이 되며 다른 함수에 퍼져서 실행 시점과 실행 횟수에 따라 결과가 달라질 수 있는 액션이 되어 버립니다.

액션에서 계산을 빼내기 위해 계산을 추출하는 방식은 짧게 세 가지 스텝을 따르는데,

1. 코드를 선택하고 빼냅니다.

2. 암묵적 입력과 출력을 찾습니다.

3. 입력은 인자로 바꾸고 출력은 리턴값으로 바꿉니다.

4장 - 액션에서 계산 빼내기 파트를 읽으면서 함수 추출하기와 암묵적 입력, 암묵적 출력 등에 대해 알아보고 문제를 풀어 보면서 이해할 수 있었습니다.

아래 내용 부터는 조금 더 내용을 정리해 보았습니다.

## 장바구니에 상품을 담았을 때 벌어지는 일들

어떤 온라인 쇼핑몰의 주요 기능은 다음과 같습니다.

- 쇼핑 중에 장바구니에 담겨 있는 제품의 금액 합계를 쇼핑몰 헤더 장바구니 아이콘 부분에서 볼 수 있는 기능입니다.

- 개별 상품 Buy Now 버튼 옆에 "Free" 라는 아이콘을 보여줍니다.

- 합계 금액이 바뀔 때마다 버튼 옆에 아이콘을 업데이트 합니다.

- 합계 금액이 바뀔 때마다 장바구니 상품 전체에 매겨지는 세금을 다시 계산해야 합니다.

![](/images/functional-programming/mega-mart.jpeg)

특정 제품을 장바구니에 담았을 때 총 구입금액 20달러를 넘기는 경우가 무료 배송비 혜택을 줄 수 있어서 해당 제품에 "Free" 아이콘을 보여줍니다.

4장을 읽고 나서 생각해보니, 이렇게 평범해 보이는 코드가 책의 열 몇장을 할애해서 수정사항을 확인하고 적용하게 하는 코드가 되는 줄은 처음엔 몰랐습니다.

## 코드를 재사용하기 쉽게 만들어야 하는 이유

장바구니 예제 코드는 재사용하기 어려운 코드였는데 다음의 이유 였습니다.

- 장바구니 정보를 전역변수에서 읽어오고 있지만, 결제팀과 배송팀은 DB에서 장바구니 정보를 읽어와야 합니다.

- 결과를 보여주기 위해 DOM 을 직접 바꾸고 있지만, 결제팀은 영수증을, 배송팀은 운송장을 출력해야 합니다.

```js
function updateShippingIcons() {
  let buyButtons = getBuyButtonsDom();
  for (let i = 0; i < buyButtons.length; i++) {
    let button = buyButtons[i];
    let item = button.item;
    if (item.price + shopping_cart_total >= 20) {
      button.showFreeShippingIcon();
    } else {
      button.hideFreeShippingIcon();
    }
  }
}
```

가령 결제팀과 배송팀에서 상품의 금액에 전체 카트 금액이 20달러보다 같거나 크다는 비즈니스 규칙을 사용하려 하는데, 해당 로직이 포함된 함수는 전역변수인 "shopping_cart_total" 값이 있어야 실행할 수 있거나 - DOM 요소가 있어야 실행할 수 있는 코드이면서 동시에 리턴값이 없기 때문에 결과를 받을 방법이 없어서 입니다.

그러므로 함수 코드를 재사용하려면 다음과 같은 조건이 필요합니다.

- 전역변수에 의존하지 않아야 합니다.
- DOM 을 사용할 수 있는 곳에서 실행된다고 가정하면 안 됩니다.
- 함수가 결괏값을 리턴해야 합니다.

## 함수의 (명시적) 입력과 출력 vs (암묵적) 입력과 출력

인자 (parameter) 는 명시적인 입력이고 리턴값은 명시적인 출력입니다. 명시적인 입력과 그에 따른 결과인 명시적인 출력만 있다면 순수함수 (계산) 에 해당합니다.
하지만 아래의 코드는 결론적으로 액션에 해당합니다.

```js
var total = 0;
function addToTotal(amount) {
  console.log('Old total: ', total);
  total += amount;
  return total;
}
```

- 전역변수를 읽는 것은 암묵적 입력에 해당합니다. (인자 외 다른 입력)
- 콘솔에 찍는 것은 암묵적 출력 입니다. (리턴값 외 다른 출력)
- 전역변수를 바꾸는 것도 암묵적 출력입니다. (리턴값 외 다른 출력)

## 함수에 암묵적 입력과 출력이 있으면 액션이 됩니다.

함수에서 암묵적 입력과 출력을 없애면 계산이 되며, 암묵적 입력은 함수의 인자로 바꾸고 - 암묵적 출력은 함수의 리턴값으로 바꾸면 됩니다.

이러한 암묵적 입력과 출력을 "부수 효과" 라고 부르며 부수 효과는 함수가 하려고 하는 주요 기능 (리턴값을 계산하는 일) 이 아닙니다.

## Step 1. 액션에서 계산 빼내기

```js
function calc_cart_total() {
  shopping_cart_total = 0;
  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];
    shopping_cart_total += item.price;
  }

  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}
```

위의 calc_cart_total() 함수에서 전역변수와 for 반복문 코드를 새로운 함수로 만듭니다.

```js
function calc_total() {
  shopping_cart_total = 0;
  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];
    shopping_cart_total += item.price;
  }
}
```

이제 calc_cart_total() 함수에서 새로 만든 함수를 불러 줍니다.

```js
function calc_cart_total() {
  calc_total();
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}
```

빼낸 코드를 새로운 함수로 만들고 원래 코드에서 빼낸 부분은 새로 만든 함수를 호출하도록 고쳤습니다.

이 리팩터링은 **서브루틴 추출하기** (extract subroutine) 이라고 부릅니다.

하지만 calc_total() 함수는 액션이므로 추가 수정이 필요합니다.

## Step 2. 암묵적 입력과 출력 찾기

![](/images/functional-programming/calc_total.jpeg)

```js
function calc_total() {
  // 전역변수를 0 으로 바꾸기 때문에 "암묵적 출력"
  shopping_cart_total = 0;
  // 전역변수 shopping_cart 를 읽는 "암묵적 입력"
  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];
    // 전역변수를 0 으로 바꾸기 때문에 "암묵적 출력"
    shopping_cart_total += item.price;
  }
}
```

## Step 3. 암묵적 출력 2개 없애기

출력은 모두 같은 전역 변수값을 바꾸므로 같은 리턴값을 사용해 바꿀 수 있습니다. 전역변수 대신 지역변수를 사용하도록 바꾸고 지역변수값을 리턴하도록 고쳤습니다.

그리고 원래 함수는 새 함수의 리턴값을 받아 전역변수에 할당하도록 고치게 되었습니다.

```js
function calc_total() {
  var total = 0; // 지역변수 total 사용
  // 전역변수 shopping_cart 를 읽는 "암묵적 입력"
  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];
    total += item.price;
  }
  return total;
}

function calc_cart_total() {
  shopping_cart_total = calc_total();
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}
```

## Step 4. 암묵적 입력 처리하기

반복문을 위해서 전역변수 "shopping_cart" 를 읽어오는 것은 암묵적 입력에 해당하고 명시적 입력으로 바꾸려면 해당 입력을 함수의 인자로 받아오도록 코드를 고쳐야 합니다.

```js
function calc_total(cart) {
  var total = 0; // 지역변수 total 사용

  for (var i = 0; i < cart.length; i++) {
    // 인자의 값을 받아오는 명시적 입력
    var item = cart[i];
    total += item.price;
  }
  return total;
}

function calc_cart_total() {
  // shopping_cart 를 인자로 전달
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}
```

이제 calc_total() 함수는 계산이 되었습니다.

## 4장의 결론

- 액션은 암묵적인 입력 또는 출력을 가지고 있습니다.

- 계산의 정의에 따르면 계산은 암묵적인 입력이나 출력이 없어야 합니다.

- 공유 변수 (전역변수 같은)는 일반적으로 암묵적 입력 또는 출력이 됩니다.

- 암묵적 입력은 인자로 바꿀 수 있습니다.

- 암묵적 출력은 리턴값으로 바꿀 수 있습니다.

- 함수형 원칙을 적용하면 액션은 줄어들고 계산은 늘어난다는 것을 확인했습니다.
