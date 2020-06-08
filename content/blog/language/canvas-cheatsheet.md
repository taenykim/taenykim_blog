---
title: 👀 Canvas cheatsheet (작성중)
date: 2020-06-07 21:06:51
category: language
draft: false
---

```toc
exclude: Table of Contents
from-heading: 1
to-heading: 2
```

# 1. Basic

## 1-1. getContext()

```js
// canvas 참조
const canvas = document.getElementById('canvas')

// CanvasRenderingContext2D 반환
// 2차원 렌더링 컨텍스트 객체
const ctx = canvas.getContext('2d')

// WebGLRenderingContext 반환
// 3차원 렌더링 컨텍스트 객체(v1)
const ctx = canvas.getContext('webgl')

// WebGL2RenderingContext 반환
// 3차원 렌더링 컨텍스트 객체(v2)
const ctx = canvas.getContext('webgl2')
```

## 1-2. getImageData()

```js
// 캔버스 ImageData 객체 반환
const myImageData = ctx.getImageData(left, top, width, height)
```

```js
ImageData = {
  width,
  height,
  data,
  //int8ClampedArray사이의 정수 값으로 RGBA 순서로 데이터를 포함하는 1 차원 배열을 표현 0하고 255(포함).
}
```

## 1-3. putImageData()

```js
// ImageData객체의 데이터를 캔버스에 페인트
ctx.putImageData(imageData, 0, 0)
```

## 1-3.

# 2. Store / Reset

## 2-1. clearRect()

```js
// 캔버스를 투명 검정 (rgba(0,0,0,0))으로 설정
ctx.clearRect(0, 0, x, y)
```

## 2-2. save()

```js
// 현재 상태를 스택으로 push
ctx.save()
```

## 2-3. restore()

```js
// 저장해두었던 상태 pop
ctx.restore()
```

# 3. Move

## 3-1. beginPath()

```js
// 경로 목록을 비워서 새 경로를 시작
ctx.beginPath()
```

## 3-2. moveTo()

```js
// 경로 이동
ctx.moveTo(x, y)
```

# 4. Draw

## 4-1. lineTo()

```js
// 현재 경로를 잇는 직선 생성
ctx.lineTo(x, y)
```

## 4-2. arc()

```js
// 호 생성
ctx.arc(x, y, radius, startAngle, endAngle, false) // 시계
ctx.arc(x, y, radius, startAngle, endAngle, true) // 반시계
```

# 5. Render

## 5-1. lineTo()

```js
// 현재 경로를 잇는 직선 생성
ctx.lineTo(x, y)
```
