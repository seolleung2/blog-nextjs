---
title: React Query 의 StaleTime 과 CacheTime 에 대해 이해하기
description: Tanstack React Query 를 사용하면서 StaleTime 과 CacheTime 에 대해 이해하기 쉬운 예시를 들어 설명해 보았습니다.
author: Dotori Jung 🌰
authorImage: /images/me.jpeg
coverImage: /images/react/rq-logo.png
date: '2023-06-07 20:07:00'
categories: ['React', 'React Query']
featured: true
---

## 🌷 블로그를 작성하게 된 계기

현업에서 서버 상태 관리를 위해 **리액트 쿼리** 를 사용하는데, 데이터 캐싱을 위해 stailTime 과 cacheTime 등의 쿼리 옵션을 전역에 혹은 개별 쿼리 훅에 적용합니다.

작업을 하다가 왜 이걸 쓰는지, 어떻게 설정해 주는지 스스로가 잘 납득이 되지 않았습니다. 그렇기 때문에 팀원에게도 잘 설명하지 못해서 이번 기회에 리액트 쿼리의 staleTime, cacheTime 을 잘 이해해야 겠다고 생각했습니다. 공식 문서나 기타 자료 등을 확인해 보면서 좀 더 이해하기 쉽게 풀어 보았습니다.

개인의 기술 블로그 이지만 무언가 알고 있는 사항을 제대로 정리했을 지 미리 걱정부터 앞서긴 하지만 일단 작성 후 재검토 해서 내용을 개선해 보도록 하겠습니다.

## 🐳 React Query, 사용하는 이유

![](/images/react/tanstack-query-main.png)

리액트 쿼리가 무엇이고 사용하는 이유는 구글에 키워드로 검색을 해보면 정말 많이 나와서 간략하게 서술하겠습니다.

### 1-1. React Query

리액트 쿼리의 공식 문서에도 나와 있듯 **파워풀한 비동기 상태 관리** 라이브러리 라고 합니다. 서버 상태 관리 (Fetching, Caching asyncronous), 동기화 및 업데이트 를 통해 클라이언트 상태와 분리하여 관리하는 것을 가능하게 도와주는 라이브러리 입니다.

그리고 자주 변경되어야 할 데이터가 아닌 이상 staleTime 이나 cacheTime 의 설정값에 따라 데이터를 캐싱해 재사용하여 API 를 많이 호출해서 서버에 부하를 주는 것을 최소화 해줄 수 있는 역할도 하는데, 오늘의 블로그 내용은 여기에 초점이 맞춰져 있습니다.

### 1-2. React Query 를 사용할 때 이점

- useEffect, useState 를 통해 Data Fetching 이나 상태 저장하는 코드 로직의 작성을 단순화 시켜 줍니다.

- 그로 인해 코드 수를 줄일 수 있습니다.

- 사이드 이펙트에서 자유롭습니다.

- 리액트 쿼리에서 Data Fetching 을 사용하기 위해 작성하는 Hook, 코드는 어떤 개발자가 작성하더라도 일관되게 규격화 되어 있어 코드를 통일성 있게 만들어 줍니다.

- 동기적으로 API 를 호출하는 경우, 즉 이전 쿼리의 API 호출이 다음 API 호출에 영향을 줄 때 작성하게 되는 코드 수를 줄일 수 있으며 enabled 옵션 등을 적용하여 데이터의 요청 시점이나 흐름 파악에 유리합니다.

## 🥛 staleTime 은 유통기한 이다

사실 staleTime 의 정의는 다음과 같습니다.

> StaleTime: The duration until a query transitions from fresh to stale. As long as the query is fresh, data will always be read from the cache only - no network request will happen! If the query is stale (which per default is: instantly), you will still get data from the cache, but a background refetch can happen under certain conditions.

[](https://tkdodo.eu/blog/practical-react-query)

데이터가 Fresh 에서 Stale 로 바뀌는 데 걸리는 시간을 의미하며, 호출한 데이터를 리액트 쿼리 자체적으로 데이터를 캐싱 및 저장해 두는데 - 바로 이 **캐시 데이터의 유통기한**을 의미하고 staleTime 을 설정하는 것은 곧 "유통기한" 을 정해 주는 것을 의미힙니다.

설정을 하지 않았을 때 디폴트 값은 0 입니다. 그러면 유통기한이 0 이므로 데이터가 Stale (신선하지 않은, 탁한) 하다고 판단되므로 캐싱 기능을 사용하지 않고 + 여기에 특정 조건을 만족하면 데이터를 Refetch 하게 됩니다.

## 🪙 cacheTime 은 폐기처리 해버리기 전의 유효 시간이다

저장한 데이터를 얼마나 유지할 지 정해주는 옵션, 데이터가 비활성 상태일 때 - 메모리에 저장된 캐싱 데이터가 유효한 (캐싱 데이터가 남아있는) 시간을 의미합니다.

> CacheTime: The duration until inactive queries will be removed from the cache. This defaults to 5 minutes. Queries transition to the inactive state as soon as there are no observers registered, so when all components which use that query have unmounted.

![](/images/react/zzalbang.png)

사실, 줄여놓은 한국말 정의나 영어나 몇 번 곱씹어야 이해가 비로소 되기 시작해서 제 나름대로 바꿔 봤습니다. 소제목에서 확인할 수 있듯이 음식🍕 (데이터💿) 을 폐기처리 해 버리기 전의 유효 시간이라고 생각했습니다.

엥, 그게 유통기한 이랑 뭐가 다른건가요? 위에 staleTime 이 유통기한이라고 언급했는데요? 라고 하실 수 있습니다. 그런데 이건 그 유통기한하고는 다릅니다.

> 유통기한이 지났는지의 여부와는 상관없이 유효 시간이 끝나면 데이터를 무조건 폐기 합니다.

이건 마치... 유통기한은 일주일 남은 포켓몬 빵을 사가지고 띠부띠부씰 만 쏙 빼가고 빵은 버리는(?) 친구들 같은 느낌이라면 적절한 비유일까 싶습니다.

![927049_915871_2039](https://github.com/seolleung2/seolleung2/assets/69143207/62d617b6-21f6-421d-a646-004af973f125)

- 유통기한 (staleTime) 은 7일
- 편의점에서 포켓몬 빵을 구입한 그 시점(A) 부터 띠부띠부씰만 채집하고 빵은 버리는 그 시점 (B) 사이의 유효 시간이 바로 CacheTime

뭔가 비유가 이상한거 같긴 한데, 리액트 쿼리의 관점으로 다시 이야기 하면 다음과 같습니다.

> 데이터가 비활성 상태일 때, 캐시된 상태로 남아있는 시간

여기서 데이터가 비활성 상태 (inactive) 라는 의미는 쿼리 인스턴스가 언마운트 (다른 페이지 이동 등) 시 해당 쿼리 (인스턴스) 를 사용하지 않을 때를 의미합니다.

쿼리 인스턴스가 언마운트 되면 바로 그 때부터 cacheTime 이 카운팅 되기 시작합니다. 데이터가 사용되지는 않지만 메모리에 남아 있는 상태이며, 마치 편의점에서 포켓몬 빵값을 지불하고 나온 그 시점 부터 유효 시간이 발동되는 것처럼요.

설정을 하지 않았을 때 디폴트 값은 5분 입니다.

## 🍒 데이터가 Fresh 또는 Stale 하다는 것의 의미

1. 데이터가 fresh 하다 : 이 데이터는 유통기한 내에 있으므로 API 재 호출 없이 캐싱된 데이터를 쓸 수 있다를 의미.

2. 데이터가 stale 하다 : 데이터의 유통기한이 다 되었으므로 신선한 데이터를 얻기 위해 다시 Fetching 을 해오는 것을 의미.

## 🛞 React Query Caching Lifecycle

아래 이미지와 적절한 예시를 위해 "우유" 를 예시로 들어 보겠습니다.

![](/images/react/workflow.png)

### 2-1. 우유는 충분히 있지만 알고보니 우유가 상했을 때 (staleTime: 0, cacheTime: 5min)

컴포넌트에서 처음으로 쿼리가 호출되었을 때 API 를 호출하고 응답 데이터를 캐싱합니다. 해당 데이터는 유통기한이 0 이기 때문에 데이터 페칭과 동시에 Stale 한 상태가 됩니다.

해당 쿼리를 1분 뒤 다시 호출했을 때, 쿼리는 캐시가 유효한지 부터 확인하는데 캐시 타임은 5분이므로 데이터는 (우유) 사용할 수 있지만 유통기한이 이미 0 으로 다했기 때문에 이 우유는 이제 상했습니다. 따라서 데이터를 요청하게 되고 반환된 데이터가 캐시된 데이터와 다르다면 캐시를 업데이트하고 해당 데이터를 사용합니다.

### 2-2. 유통기한도 충분하고 우유도 충분할 때 (staleTime: 5min, cacheTime: 5min)

처음 쿼리를 호출할 때는 2-1 의 방식과 동일한데, 1분 뒤 같은 쿼리를 호출했을 때 캐시는 5분 동안 유효하므로 사용할 수 있으며 - 유통기한 (StaleTime) 도 5분이므로 이제 캐시된 데이터를 사용하고 API 요청을 하지 않습니다.

5분 뒤 다시 동일한 쿼리를 호출했을 때는 유통기한이 다했고 (데이터가 Stale 한 상태), 캐시도 유효 시간이 다했으므로 API 요청을 통해 다시 데이터를 받아 캐싱하여 사용합니다.

### 2-3. 유통기한은 충분한데 먹을 우유가 없을 때 (staleTime: 5min, cacheTime: 0)

마찬가지로 처음 쿼리를 호출할 때는 2-1 방식과 동일하며 1분 뒤 같은 쿼리를 호출했을 때, 유통기한이 충분하므로 API 요청을 하지 않고 반환된 캐시 데이터를 그대로 사용하려는데 이미 캐시 데이터가 폐기되어 버린 상태입니다. 따라서 데이터를 요청하게 되어 데이터 캐싱을 제대로 활용할 수 없습니다.

> Most of the time, if you want to change one of these settings, it's the staleTime that needs adjusting. I have rarely ever needed to tamper with the cacheTime. There is a good explanation by example in the docs as well.

대부분의 경우 cacheTime 은 조작할 필요가 거의 없고 staleTime 에 대해서만 조정이 필요하다고 합니다.

[](https://tanstack.com/query/latest/docs/react/guides/caching#basic-example)

## 👻 cacheTime 은 항상 staleTime 보다 커야 한다?

서버에서 fresh 한 데이터를 가져오는 동안 캐시된 데이터를 보여준다 라는 기능을 사용하지 않게 되는 것일 뿐 작게 설정한다고 문제가 되는 것은 아닙니다.

(보통 cacheTime 을 staleTime 보다 크게 설정하는 것이 일반적)

## 🫠 결론 : 다루는 데이터의 타입에 따라 적절히 옵션을 설정하자

다루는 데이터가 주가, 숫자에 영향을 받아 실시간으로 자주 바뀌어야만 하는 데이터라면 staleTime, cacheTime 의 기본 설정을 그대로 두고 사용하는 편이 나을 것입니다.

다루는 데이터의 변경이 자주 일어나지 않는다면 staleTime, cacheTime 을 조정해서 불필요한 API 호출을 하지 않도록 할 수 있는게 좋다고 생각합니다.

![](/images/react/staletime-cachetime.png)
