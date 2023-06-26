---
title: 쏙쏙 들어오는 함수형 코딩 5장 - 더 좋은 액션 만들기 (1)
description: 암묵적 입력과 출력을 제거해서 재사용하기 좋은 코드를 만드는 법과 복잡하게 엉킨 코드를 풀어 더 좋은 구조로 만드는 법을 배웁니다.
author: Dotori Jung 🌰
authorImage: /images/me.jpeg
coverImage: /images/functional-programming/functional-coding-book.jpeg
date: '2023-06-26 23:01:00'
categories: ['Functional Programming']
featured: true
---

## 들어가기 전에

지난 챕터 4에서 액션을 계산으로 바꾸는 방법에 대해 알아보았습니다. 사실 이 방법이 베스트 이지만 모든 액션을 없애고 계산으로 바꿀 수 있는 것도 아닙니다.
책의 서두에서 언급했듯이 부수 효과는 피할 수 없지만 최소화 하는 것을 목적으로 한다고 했습니다.

그렇다면 이 **액션에서 암묵적 입력과 암묵적 출력을 최소화** 하는 방향으로 가야 합니다.

## 비즈니스 요구 사항과 설계를 맞추기

아래 함수는 장바구니의 합계 금액 (total) 과 담은 상품의 가격 (item_price) 을 파라미터로 받아 20 달러 이상이면 무료배송 (true: boolean) 여부 라는 결과를 리턴해주는 함수입니다.

```js
function gets_free_shipping(total, item_price) {
  return item_price + total >= 20;
}
```

이 함수는 비즈니스 요구 사항에 맞지 않는 부분이 있습니다. 비즈니스 요구 사항은 장바구니에 담긴 제품을 주문할 때 무료 배송인지 확인하는 것입니다.

합계 금액과 제품 가격에 대한 무료 배송 여부가 아니고 주문 결과 자체가 무료 배송인지 확인해야 한다는.

즉, **"주문 결과" 로 무료배송을 판단**해야 된다는 것을 의미합니다.

## 비즈니스 요구 사항과 함수를 맞추기

4장에서 사용했던 함수 calc_total 을 재사용해서 비즈니스 요구 사항과 함수를 맞춰 보겠습니다.

```js
// 장바구니에 담고 난 최종 주문 결과가 담긴 cart 를 인자로 넣습니다.
function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}
```

gets_free_shipping 함수의 동작 방식을 바꾸었기 때문에 엄밀히 말하면 리팩토링이라고 할 수 없다고 합니다.

```js
function update_shipping_icons() {
  var buttons = get_buy_buttons_dom();
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var item = button.item;

    var new_cart = add_item(shopping_cart, item.name, item.price);
    if (gets_free_shipping(new_cart)) {
      button.showFreeShippingIcon();
    } else {
      button.hideFreeShippingIcon();
    }
  }
}
```

## 원칙 : 암묵적 입력과 출력은 적을수록 좋습니다.

- 액션에서 모든 암묵적 입력과 출력을 없애지 않더라도 암묵적 입력과 출력을 줄이면 좋습니다.
- 어떤 함수에 암묵적 입력과 출력이 있다면 다른 컴포넌트와 강하게 연결된 컴포넌트라고 할 수 있습니다.
- 그렇다면 다른 곳에서 사용할 수 없기 때문에 모듈이 아닙니다.
- 함수의 동작이 연결된 부분의 동작에 의존하기 때문입니다.
- 아무 때나 실행할 수 없는 결합이 강한 함수는 테스트하기 어렵고 다른 함수에 영향을 줄 수 있습니다.
- 함수의 크기가 작으면 이해하기 쉽고 응집력 있으며 재사용하기 쉽습니다.
- 암묵적 입력과 출력을 줄이면 테스트하기 쉽고 재사용하기 좋습니다.

## 암묵적 입력과 출력을 줄인 예시

update_shipping_icons 함수에 위 원칙을 적용해 암묵적 입력과 출력을 줄여보았습니다. 암묵적 입력을 명시적 입력인 인자로 바꾸어 본 결과입니다.

```js
// 전역변수 shopping_cart 대신 인자를 추가해 받습니다.
function update_shipping_icons(cart) {
  var buttons = get_buy_buttons_dom();
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var item = button.item;

    // 추가된 인자 cart 에서 불러옵니다.
    var new_cart = add_item(cart, item.name, item.price);
    if (gets_free_shipping(new_cart)) {
      button.showFreeShippingIcon();
    } else {
      button.hideFreeShippingIcon();
    }
  }
}
```

함수 시그니처가 달라졌으므로 호출하는 부분도 인자가 추가되도록 변경합니다.

```js
function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);

  set_cart_total_dom();
  update_shipping_icons(shopping_cart);
  update_tax_dom();
}
```

전역변수를 읽는 곳을 최대한 인자로 바꾸도록 하는 것이 블로그 내용의 핵심이라 할 수 있습니다.
