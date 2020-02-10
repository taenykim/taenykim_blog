---
title: 자바스크립트 nodeJS에서 실행하기 -3
date: 2020-02-09 16:02:23
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

- [자바스크립트nodeJS에서실행하기1(module)](https://taeny.dev/environment/env5_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20nodeJS%EC%97%90%EC%84%9C%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0/)

- [자바스크립트nodeJS에서실행하기2(npm,global)](https://taeny.dev/environment/env6_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20nodeJS%EC%97%90%EC%84%9C%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B02/)에서 이어집니다.

# 1. nodeJS 내장 모듈

## 1-1. os

nodeJS 프로그램을 실행시키는 운영체제(os) 정보를 가져온다.

###### :question: 실제 사용하게 될 때 학습!

## 1-2. path

nodeJS 으로 실행되는 javascript 프로그램 환경에 대한 경로를 조작할 수 있게 하는 모듈.

###### :bulb: 파일(이미지,동영상 등)을 저장하거나 접근할 때 많이 쓸 것 같다.

```javascript
// 모듈 사용
const path = require('path')

// property
const path = {
    sep: '/' // 경로의 구분자
    delimiter : ':' // 환경변수 구분자
}

// method
path.dirname(__filname)
// parameter 파일의 경로
// __dirname과 같은 결과
// parameter에 __dirname 넣으면 얘의 상위 디렉토리 보여줌

path.extname(__filename)
// parameter 파일의 확장자

path.basename(__filename, '.js')
// parameter의 확장자를 뺀 파일이름을 보여줌
// __filename은 경로 + 파일명 다 포함이지만,
// 얘는 직접 파일만 추출할 때! 씀.

path.parse(__filename)
// 해당 경로 파일에 대한 정보 파싱
{
  root: '/',
  dir: '/Users/taeeunkim/Desktop/temp',
  base: 'node.js',
  ext: '.js',
  name: 'node'
}

path.join('/a','/b', /* ... */)
// :star: parameter 경로들을 합침
// 출력값 : /a/b/

path.resolve('/a','/b', /* ... */)
// :star: parameter 경로들을 합침
// 출력값 : /b/
```

`join() vs resolve()`

> **공통점** 으로 경로를 합친다는 게 있다.

> **join()**은 상대적 경로 (./a ..) 까지 다 포함시켜줌.

> **resolve()**는 절대적 경로 (/)를 만나면 그 앞의 경로들을 무시함 (까다로운녀석)

## 1-3. fs

> 백준 문제풀이용 모듈,,,

```javascript
const fs = require('fs')

// 비동기 읽기
// 처리속도 빠름 but 필요에 따라 비동기처리 해야함
fs.readFile('file.txt', 'utf8', function(err, data) {
  console.log(data)
})

// 동기 읽기
// blocking 발생!
const text = fs.readFileSync('file.txt', 'utf8')
console.log(text)

// 백준
const input = fs.readFileSync('/dev/stdin').toString()
// " " 나 "\n" 처리 해줘야함.
```

## 1-4. readline

> 구름 IDE 용 모듈,,,

```javascript
const readline = require('readline')
// 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// line에 input값 입력됨
rl.on('line', function(line) {
  // 콘솔에 output 출력
  console.log(line)
  rl.close()
}).on('close', function() {
  process.exit()
})
```

> 출처 : [구름IDE](https://www.goorm.io/)

## 1-5. http

###### :question: express 학습 후 다시오기!
