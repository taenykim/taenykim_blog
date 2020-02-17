---
title: 16) 자바스크립트 X AJAX -2 (redux, generator, redux saga)
date: 2020-02-17 13:03:11
category: javascript
draft: false
---

```toc
exclude: Table of Contents
from-heading: 1
to-heading: 5
```

# 0. Intro

- [자바스크립트 X AJAX -1 (fetch, axios, callback, promise, async await)](https://taeny.dev/javascript/15%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8xajax/)

프로그램이 커질수록 AJAX 비동기처리 코드가 많아지고 해당 액션에 따른 네트워킹 코드가 뿔뿔이 흩어지면 관리가 어려워진다.

이 때, 리덕스의 미들웨어인 `리덕스 사가`를 리덕스에 장착해주면 비동기처리코드를 관리하기 용이해진다.

# 1. Generator(ES6)

## 1-1. generator란

리덕스 사가는 ES6 문법 generator를 사용한다.

`Generator` : 빠져나갔다가 나중에 다시 돌아와도 사용가능한 함수. 이때 컨텍스트(변수 값)는 출입 과정에서 저장된 상태로 남아 있다.

> generator 함수는 generator 객체를 반환한다!!

## 1-2. generator 사용법

```js
function* generator() {
  let index = 0
  // while(true)일 경우 무한 반복
  while (index <= 2) {
    yield index++
  }
}
```

```js
let iterator = generator()
iterator.next() // { value: 0, done: false }
iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: undefined, done: true }
```

제네레이터 함수가 호출되면 바로 실행하지 않고 generator 객체가 iterator(반복기) 변수에 담기고 next() 메소드를 사용하면 함수의 yield 부분의 값을 돌려주고 멈춤. (다음 실행시 중단된 위치에서 시작)

`value` : yield 된 값

`done` : 더 진행할 수 있으면 (yield가 더 존재) false, 끝났으면 true

> 흐름을 끊고 재개하는 방식으로 비동기->동기 작업에 사용가능.

# 2. 리덕스 사가(redux-saga)

> 사가는 (이펙트에 따라) next를 알아서 해주는 제네레이터이다.

```js
function loadMainPostsAPI() {
  return axios.get('/posts')
}

function* loadMainPosts() {
  try {
    const result = yield call(loadMainPostsAPI)
    yield put({
      type: LOAD_MAIN_POSTS_SUCCESS,
      data: result.data,
    })
  } catch (e) {
    yield put({
      type: LOAD_MAIN_POSTS_FAILURE,
      error: e,
    })
  }
}

function* watchLoadMainPosts() {
  yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts)
}

export default function* postSaga() {
  yield all([fork(watchLoadMainPosts)])
}
```

> :hatched_chick: 코드의 흐름 정확히 파악할것!

[예제 출처](https://github.com/ZeroCho/react-nodebird)

# 3. 리덕스 사가 이펙트 (redux-saga-effect)

`fork`

함수호출(비동기)

`call`

함수호출(동기)

`put`

액션 dispatch

`takeLatest`

액션이 dispatch되는 것을 기다려서 dispatch될때 generator를 호출 (맨 뒤에꺼만)

`takeEvery`

액션이 dispatch되는 것을 기다려서 dispatch될때 generator를 호출 (전부)

`all`

:hatched_chick: 다시 돌아오기

`throttle`

:hatched_chick: 다시 돌아오기
