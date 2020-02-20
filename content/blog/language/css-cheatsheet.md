---
title: CSS cheatsheet (v.20.02.10)
date: 2020-02-10 12:02:09
category: language
draft: false
---

```toc
exclude: Table of Contents
from-heading: 1
to-heading: 6
```

# 0. Intro

:hatched_chick: 추가 예정

> grid

> css 작동원리 (렌더링엔진)

> pseudo-element (::before, ::after)

# 1. CSS

# 2. 선택자

선택자는 DOM element(node가 아니다!) style에 접근해서 속성을 넣어준다.

> text node, 주석 이런애들은 css 못가짐 why? element 객체 안에 style 속성이 들어있는데 element가 아닌 node들은 style 속성이 없음.

> 같은 맥락에서, html { color : red } 는 되지만, document { color : red } 는 안된다.

[DOM엘리먼트속성](https://taeny.dev/environment/env4_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EA%B0%9D%EC%B2%B4%EC%A0%91%EA%B7%BC%ED%95%98%EA%B8%B02/#4-dom-element-%EC%86%8D%EC%84%B1)

## 2-1. 전체 선택자

\*(wild card) 사용

```css
* {
  color: black;
}
```

## 2-2. 태그 선택자

해당 태그의 element 선택.

```css
body {
  width: 100vw;
  height: 100vh;
}
p {
  font-size: 10px;
}
```

## 2-3. Class 선택자

해당 class를 가진 elements 선택. (복수)

```css
.box {
  border: 2px solid red;
}
```

## 2-4. ID 선택자

해당 id를 가진 element 선택. (단수)

```css
#selectedBox {
  background: blue;
}
```

`Class vs ID`

> 1. Class 선택자는 재사용성이 많은 스타일 (box) 에 , ID는 유일한 정보를 가지는 스타일 (selectedBox) 에 사용.

> 2. 우선순위는 ID가 Class 보다 높다.

## 2-5. 태그 + class | id

해당 태그이면서 해당 Class 또는 ID인 선택자

> div.box / div#selectedBox

## 2-6. 태그 태그

해당 태그의 `자손` 태그 선택자

> div p

## 2-7. 태그 > 태그

해당 태그의 `자식` 태그 선택자 (바로 직계만 해당)

> div > p

## 2-8. 선택자 중복 시 우선순위

마지막에 적용된 스타일을 적용함.

```html
<style>
  .blue {
    color: blue;
  }
  .red {
    color: red;
  }
</style>

<!-- 중복된 클래스 순서를 바꿔서 지정 -->
<div class = "blue red"></div>
<div class = "red" blue"></div>
```

> 이 경우 두 태그 모두 `마지막 스타일`인 `red`를 적용함.

## 2-9. 참고

[선택자게임](http://flukeout.github.io/)

# 3. 속성

## 3-1. 내부폰트 적용

```css
@font-face {
  font-family: '폰트명';
  src: url(폰트파일.otf) format('truetype');
}
```

## 3-2. Flex container

```css
.container {
  display: flex; /* 컨테이너 상태를 flex로 설정*/

  flex-direction: row; /* (default)items 정렬을 가로로 */
  flex-direction: column; /* items 정렬을 세로로 */

  flex-wrap: nowrap; /* (default) items 넘어가면 짤림 */
  flex-wrap: wrap; /* items 넘어가면 줄바꿈 */

  /* items 메인축 (진행방향) 정렬 */
  justify-content: flex-start; /* (default) items 앞쪽정렬 */
  justify-content: flex-end; /* items 뒤쪽정렬 */
  justify-content: center; /* items 중앙정렬 */
  justify-content: space-around; /* items 일정한 간격 정렬 */
  justify-content: space-between; /* items 일정한 간격 정렬(양끝붙임) */

  /* items 교차축 (진행방향의 수직방향 정렬 */
  align-items: stretch; /* (default) items container 크기에 맞춤 */
  align-items: flex-start; /* items 앞쪽정렬 */
  align-items: flex-end; /* items 뒤쪽정렬 */
  align-items: center; /* items 중앙정렬 */
}
```

## 3-3. Flex item

```css
.item {
  flex: initial; /* (default) item 크기에 맞춤 (container 크기에 따라 가변) */
  flex: none; /* item 크기에 맞춤 (크기고정) */
  flex: 1; /* container 크기에 맞춤 */

  align-self: center; /* items 중에 나만 해당하는 정렬 */
  justify-self: center; /* items 중에 나만 해당하는 정렬 */
}
```

## 3-4. border

```css
.box {
  border: 2px solid red; /* 두께, 속성, 색깔 순 */
  border-radius: 2px; /* 가장자리를 뭉툭하게 (50%로 설정하면 원이 된다)
  */

  box-shadow: 2px 2px 2px black; /* offset-x | offset-y | blur-radius | color 순 */
}
```

## 3-5. color

```css
.colorBox {
  color: rgba(255,255,255,0.5); /* rgb색상과 투명도 사용 */
```

## 3-6. size

```css
.sizeBox {
  width: 100%;
  height: 100%; /* 부모의 기준 */
  width: 100vw;
  height: 100vh; /* viewport 기준 */

  max-width: 40px;
  max-height: 40px; /* max범위 설정 (반응형에서 유용) */

  margin: 5px; /* 바깥쪽 여백 */
  padding: 5px; /* 안쪽 여백 */

  overflow: auto; /* 넘어가면 스크롤 나옴 */
  overflow: visible; /* 넘어가면 초과해서 나옴 */
  overflow: hidden; /* 넘어가면 짤림 */
}
```

## 3-7. image

```css
.image {
  background-image: url(이미지경로.png);
  background-position: center; /* 50% 50% 나 left bottom 등 이미지 정렬 */
  background-repeat: no-repeat; /* 이미지 반복 x */
  background-size: contain; /* 이미지 설정한 크기에 맞추기(짤리지 않게) */
  background-size: cover; /* 이미지 설정한 크기에 맞추기(짤림) */
```

## 3-8. position

```css
.positionBox {
  position: static; /* (default) 차례대로 왼쪽에서 오른쪽으로(<span>) 위에서 아래로 쌓임(<div>) */
  position: relative; /* 기존의 static 상태에서 위치조정 가능 */
  position: absolute; /* 완전히 자신의 고유 위치를 갖는다. 부모의 position이 relative인 경우, 그 위치 내에서의 고유위치를 찾음 */
  position: fixed; /* 브라우저 내의 고정위치를 가짐 */

  z-index: 5; /* 레이어의 순서 지정가능 */
}
```

## 3-9. pseudo class

```css
.box:hover {
  /* 마우스 올렸을 때 */
}
.box:link {
  /* 방문하지 않은 링크 */
}
.box:visited {
  /* 방문한 링크 */
}
.box:active {
  /* 마우스로 클릭한 상태 */
}
.box:focus {
  /* 활성화 (ex. input태그의 클릭) */
}

.box:nth-child(n) {
  /* n번째 태그요소 선택 */
}
```

## 3-10. transform

```css
.transformer {
  transform: scale() rotate() translate() skew(); /* 콘텐츠 변형 */
  transform-origin: center; /* 변형 기준점 잡기 */

  transition: 1s linear 0.3s; /* duration timing-function delay 순 */
}
```

## 3-11. filter

```css
.filterBox {
  filter: blur() grayscale() drop-shadow(); /* 다양한 필터들 */
}
```

## 3-12. text

```css
.textBox {
  text-align: center; /* 글정렬 */
  line-height: 20px; /* 줄간격 */
  text-decoration: underline; /* 밑줄 */
  text-shadow: 1px 1px 2px pink; /* offset-x | offset-y | blur-radius | color 순 */
  letter-spacing: 10px; /* 글자사이 간격 */
  word-spacing: 10px; /* 단어사이 간격 */
}
```

## 3-13. media query (반응형)

```css
@media (max-width: 1070px) {
}
@media (max-width: 770px) {
}
```
