---
title: 자바스크립트 nodeJS에서 실행하기 -2 (작성중)
date: 2020-02-08 19:02:56
category: environment
draft: false
---

```toc
exclude: Table of Contents
from-heading: 1
to-heading: 5
```

# 0. nodeJS가 하는일

구체적으로 nodeJS로 무엇을 할 수 있을까?

[자바스크립트nodeJS에서실행하기1](https://taeny.dev/environment/env5_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20nodeJS%EC%97%90%EC%84%9C%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0/)에서 이어집니다.

# 1. npm

`npm` (node package manager) : 자바스크립트 프로그래밍 언어를 위한 패키지 관리자

앞선 포스트에서 `모듈`에 대해서 알아보았다.

nodeJS에서는 npm이라고 `패키지`를 관리할 수 있는 프로그램이 내장되어 있어서 필요한 패키지를 내 프로그램에 다운로드 받을 수도 있고, 패키지를 내가 제작해서 업로드 할 수도 있다.

그리고 내 프로그램에 사용되는 패키지들을 관리(대표적으로 `dependency` 부여)해주기도 한다.

> **모듈** : 특정한 기능을 하는 함수나 변수들의 집합

[자바스크립트nodeJS에서실행하기1>모듈시스템](https://taeny.dev/environment/env5_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20nodeJS%EC%97%90%EC%84%9C%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0/#4-%EB%AA%A8%EB%93%88-%EC%8B%9C%EC%8A%A4%ED%85%9C)

> **패키지** : 이런 모듈들을 용도에 맞게 패키징한 하나의 프로그램

> **dependency** : 패키지들이 충돌하지 않게 npm은 패키지마다 의존성을 부여해준다.

[모듈시스템>dependency(의존성)](https://taeny.dev/environment/env5_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20nodeJS%EC%97%90%EC%84%9C%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0/#4-1-dependency-%EC%9D%98%EC%A1%B4%EC%84%B1)

## 1-1. package.json

내가 프로그램을 만들면 (완전 간단하더라도) 그것도 하나의 패키지이다. 그 만들어진 패키지의 이름, 버전, 내 패키지에서 사용된 패키지 등 내 패키지에 관한 스펙을 명시해주는 파일이 `package.json`이다.

package.json은 직접 만들거나 `npm init`이라는 명령어를 통해 자동 생성할 수 있다.

```json
// package.json
{
    // 패키지 이름
    "name": "taenylog",
    // 패키지 버전
    "version": "1.0.0",
    // 설명
    "description": "",
    // 키워드(npm search로 검색됨)
    "keywords": "blog"
    // 홈페이지
    "homepage": "https://taeny.dev",
    // 패키지의 시작점이 되는 module ID
    "main": "index.js",
    // :star: 스크립트
    "scripts": {
        "dev": "nodemon",
        "build": "next build"
    },
    // 패키지 저자
     "author": "taenykim",
     // 라이센스
    "license": "MIT",
    // :star: 의존성 패키지
    "dependencies": {
        // :star: 패키지명 + 패키지 버전
        "typescript": "^3.7.5"
    },
    // :star: 의존성 패키지 (개발용)
    "devDependencies": {
     }
     // ... 이외에도 많음
}
```

### 1. scripts

npm 명령어로 실행시킬 수 있는 명령어를 등록한다.

```
//nodemon 실행
npm run build

//next build 실행
npm run dev
```

### 2. dependencies

내 프로그램에 의존된 패키지들을 기록한다.

npm 을 통하여 패키지를 다운로드 받으면 자동으로 기록된다.

`npm i` 를 통하여 dependencies 에 기록된 의존성 패키지를 모조리 다운로드 받을 수도 있다.

> 다운로드 받은 패키지들은 node_modules 디렉토리에 저장된다.

> node_modules 디렉토리는 패키지의 모듈들의 의존관계를 `트리형태`로 저장한다.

### 3. package version

```json
{
  "dependencies": {
    // 캐럿(^) : 3.7.5 <= x < 4.0.0
    // 맨앞자리 버전이 바뀌지 않으면서 가장 최신버전
    "typescript": "^3.7.5",
    // 틸드(~) : 9.2.1 <= x < 9.3.0
    // 두번째자리 버전이 바뀌지 않으면서 가장 최신버전
    "next": "^9.2.1"
  }
}
```

### 4. devDependencies

내 패키지를 개발할 때 필요한 의존성 패키지들을 기록한다.

배포나 번들 시에 포함되지 않는다.

```json
 "devDependencies": {
    "nodemon": "^2.0.2",
    "webpack": "^4.41.5"
  }
```

## 1-2. package-lock.json

package-lock.json 파일은 node_modules 에 저장된 패키지의 모듈들의 의존성 관계를 기록한다.

> node_modules 에 저장되는 모듈이 트리형태로 저장되듯이, package-lock.json 에서도 트리형태로 기록된다.

## 1-3. npm 명령어

**npm init** : package.json 파일 생성

**npm install + 패키지명@version** : 패키지 설치

> package.json 'dependency'에 기록

**npm install -D** : 패키지 설치 (개발용)

> package.json 'devDependency'에 기록

**npm install -g** : 패키지 글로벌 설치

**npm ls** : 패키지 의존성 트리 보기

**npm start** : scripts 의 start 부분 실행

> scripts에 start 가 없다면 node server.js 실행

**npm run `script`** : scripts 부분의 명령어 실행

**npm cache clean** : npm 캐시를 지움

# 2. nodeJS 내장 객체

앞선 포스트에서 브라우저에서 자바스크립트를 실행할 때, 실행컨텍스트의 scope chain에 전역객체로 `window`가 담기는 것을 알아보았다.

[자바스크립트로브라우저객체접근하기1](https://taeny.dev/environment/env3_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EA%B0%9D%EC%B2%B4%EC%A0%91%EA%B7%BC%ED%95%98%EA%B8%B01/)

그럼 nodeJS 에서도 console.log() 를 쓸 수 있으니까 this 에 console 객체를 내장한 (window랑 비슷한,,) 애가 담겼겠구나 하고 this를 찍어보았다.

```javascript
console.log(this)
// undefined
```

읭?

찾아보니 nodeJS 에서는 global 이라는 전역객체가 존재하지만 호출자는 global 전역객체가 아니라 module 그 자체라고 한다.
