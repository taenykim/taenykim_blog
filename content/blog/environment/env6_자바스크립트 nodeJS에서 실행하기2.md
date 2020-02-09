---
title: 자바스크립트 nodeJS에서 실행하기 -2 (작성중)
date: 2020-02-08 19:02:56
category: environment
draft: false
---

[자바스크립트nodeJS에서실행하기1](https://taeny.dev/environment/env5_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20nodeJS%EC%97%90%EC%84%9C%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0/)에서 이어집니다.

```toc
exclude: Table of Contents
from-heading: 1
to-heading: 5
```

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

## 1-1. package.json & package-lock.json

내가 프로그램을 만들면 (완전 간단하더라도) 그것도 하나의 패키지이다. 그 만들어진 패키지의 이름, 버전, 내 패키지에서 사용된 패키지 등 내 패키지에 관한 스펙을 명시해주는 파일이 `package.json`이다.

package.json은 직접 만들거나 `npm init`이라는 명령어를 통해 자동 생성할 수 있다.

```javascript
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
    },
    // 패키지 저자
     "author": "taenykim",
     // 라이센스
    "license": "MIT",
    // :star: 의존성 패키지
    "dependencies": {
    },
    // :star: 의존성 패키지 (개발용)
    "devDependencies": {
     }
     // ... 이외에도 많음
}
```

### scripts

### dependencies

### devDependencies

(작성중)
