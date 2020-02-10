---
title: 5) 자바스크립트 X nodeJS -1 (module)
date: 2020-02-08 15:02:13
category: javascript
draft: false
---

```toc
exclude: Table of Contents
from-heading: 1
to-heading: 5
```

# 1. nodeJS?

앞선 포스트에서 브라우저가 자바스크립트엔진을 통하여 자바스크립트를 실행하고 더나아가 브라우저 객체 혹은 DOM (html을 비롯한 태그요소들의 객체형태) 에 접근하는 방식에 대해 다뤘다.

- [웹브라우저작동원리](https://taeny.dev/environment/environment1_%EC%9B%B9%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9E%91%EB%8F%99%EC%9B%90%EB%A6%AC/)

- [자바스크립트로브라우저객체접근하기1(window)](https://taeny.dev/environment/environment3_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EA%B0%9D%EC%B2%B4%EC%A0%91%EA%B7%BC%ED%95%98%EA%B8%B01/)

- [자바스크립트로브라우저객체접근하기2(document)](https://taeny.dev/environment/environment4_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EA%B0%9D%EC%B2%B4%EC%A0%91%EA%B7%BC%ED%95%98%EA%B8%B02/)

## 1-1. nodeJS란?

브라우저 프로그램은 자체 자바스크립트엔진을 내장해서 브라우저를 컴퓨터에 설치하면 자동으로 자바스크립트엔진이 설치되고 브라우저 내에서 자바스크립트를 실행할 수 있다.

![](./images/console.png)

> 이렇게 개발자도구 콘솔을 이용하면 된다.

하지만, 브라우저 없이 자바스크립트의 실행환경을 구성할 수 없을까?

이 때, 브라우저 없이 내 컴퓨터에서 자바스크립트를 실행할 수 있는 프로그램이 바로 `nodeJS` 이다.

> 즉, 내 자바스크립트 프로그램을 프로세스로 만들어 주는 것이 바로 nodeJS !

> nodeJS는 크롬과 같은 v8 자바스크립트 엔진을 사용한다.

[브라우저작동원리>자바스크립트엔진](https://taeny.dev/environment/environment1_%EC%9B%B9%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9E%91%EB%8F%99%EC%9B%90%EB%A6%AC/#2-2-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%94%EC%A7%84)

그리고 html에서는 `<script></script>` 태그로 자바스크립트파일을 불러와 실행 시켰다면 nodeJS 에서는 `node 파일이름.js` 처럼 명령어를 통해 자바스크립트를 실행한다.

## 1-2. nodeJS 작동원리

nodeJS는 실행컨텍스트 내에서 대표적으로 싱글스레드, 비동기 방식으로 자바스크립트를 실행한다.

[자바스크립트작동원리](http://localhost:8000/environment/environment2_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9E%91%EB%8F%99%EC%9B%90%EB%A6%AC/)

# 2. nodeJS 가 하는일

그럼 구체적으로 nodeJS로 무엇을 할 수 있을까?

# 3. 웹 서버 구동

웹의 작동원리는 브라우저에서 다른 컴퓨터(서버)의 프로세스에 포트를 통해 접근해서 필요한 소스를 받아오는 식이다.

[웹작동원리](https://taeny.dev/environment/environment1_%EC%9B%B9%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9E%91%EB%8F%99%EC%9B%90%EB%A6%AC/#1-%EC%9B%B9-%EC%9E%91%EB%8F%99%EC%9B%90%EB%A6%AC)

만약 다른 사용자가 웹을 통하여 내 프로그램에 접근하고 싶을 때, 내 프로그램은 컴퓨터 어디선가 프로세스 형태로 돌아가고 있어야 하고 nodeJS는 내 컴퓨터의 리소스를 사용해 프로그램을 돌려준다. (즉 nodeJS 내장 자바스크립트 엔진을 이용해 자바스크립트를 실행시켜준다.)

# 4. 모듈 시스템

`모듈` : 특정한 기능을 하는 함수나 변수들이 **캡슐화**된 집합

방대한 프로그램의 덩치를 관리가 용이하게 쪼개거나 외부 잘 만들어진 프로그램을 쉽게 내 프로그램에도 쓸 수 있게 해주는 것이 모듈!

> 모듈은 자체로도 하나의 프로그램이면서 전체 프로그램의 부품으로 사용된다.

## 4-1. Dependency (의존성)

`의존성` : 모듈 간의 연결 혹은 관계

> 프로그램이 커짐에 따라, 사용하는 모듈의 수가 많아지면 모듈들에 있는 변수, 함수 객체들이 충돌할 가능성이 높아지기 때문에 모듈들이 충돌하지 않게 의존성을 부여해 주어야한다.

의존성 부여는 자바스크립트 실행 컨텍스트의 `scope chain`과 관련이 있다.

[실행컨텍스트>scopechain](https://taeny.dev/environment/env2_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9E%91%EB%8F%99%EC%9B%90%EB%A6%AC/#3-2-scope-chain)

자바스크립트는 실행 컨텍스트 내에서 현재 스코프의 변수와 함수를 우선적으로 스캔하고 없을 시, scope chain 을 참조해 다음 스코프로 넘어간다.

근데 scope chain을 참조하는 과정에서 **다른 기능을 하지만 똑같은 변수명**의 변수나 함수를 만나버리면 프로그램이 치명적인 에러를 발생할 가능성을 낳는다.

그렇게 자바스크립트 파일 내에서 이것은 모듈이니까 나 외에는 참조하지마! 하고 `Dependency Injection`을 해줘야한다.

## 4-2. html에서 모듈사용

html script 태그 내에서 type 속성에 module 속성값을 넣어줌으로써 직접 모듈임을 정의 해줄 수 있다.

```html
<script src="app.js"></script>
<script type="module" src="module1.js"></script>
```

## 4-3. CommonJS란?

script태그에 넣어주는 방식은 브라우저에 국한되므로 많은 제약이 있다. 그렇게 브라우저뿐만 아니라 내 컴퓨터에 있는 javascript 파일을 모듈로서 정의하고 사용하기 위해(`서버사이드 자바스크립트`) CommonJS 라는 단체가 나오게 된다.

현재 CommonJS도 ECMAScript 와 마찬가지로 자바스크립트의 모듈화를 위한 하나의 명세(문법)을 정의했으며 nodeJS에서 이를 받아들여 모듈화를 위한 언어를 사용할 수 있게 되었다.

## 4-4. CommonJS 문법

### 모듈화

```javascript
// 부분 모듈화
exports.function functionA() {}
exports.function functionB() {}

// 전체 모듈화
// moduleName1 객체에 모든 내용 담기!
module.exports = moduleName1
```

### 모듈 사용

```javascript
// 경로로 사용
const module1 = require('./moduleName1')

// node_modules or 내장모듈 사용
const express = require('express')
```

## 4-5. 자바스크립트 문법(ES6)

nodeJS에서는 일반적으로 CommonJS 방식을 사용하나 점차적으로 ECMAScript 모듈 방식도 도입 중이다.

###### :bulb: 현재 node 13.2.0 에서 package.json {"type":"module"} 이나 .mjs 방식으로 사용가능한듯!

### 모듈화

```javascript
// 부분 모듈화
export function functionA() {}
export function functionB() {}

// :star: 전체 모듈화 (default export)
// 보통 파일 안에 하나의 모듈을 모듈화 할 때 사용!
export default moduleName2
```

### 모듈 사용

```javascript
// 전체 모듈 사용
import * from './moduleName2'
// :star: 전체 모듈 사용 (default import)
// 보통 파일 안에 하나의 모듈을 모듈화 할 때 사용!
import whatever from './moduleName2'

// 부분 모듈 사용
import { moduleFunc } from './moduleName2'

// node_modules or 내장모듈 사용
import os from 'os'
```

`export vs default export`

> **export**는 모듈을 **import** 할 때, {}를 꼭 써줘야 한다. {}는 사용 모듈의 제한성 표시이며 해당 모듈명과 동일하게 써줘야 한다. 바꾸고 싶으면 {moduleFuc as myModuleFuc } 이르케 써줘야함.

> **default export**는 모듈 내에 하나의 모듈화를 위해 사용되는데 모듈을 **import** 할 때, {}를 붙이지 않으며, 자신이 원하는 모듈명으로 모듈을 사용할 수 있다.
