---
title: 17) 자바스크립트 X 리액트 X NEXT (Routing system, SSR) (작성중)
date: 2020-02-17 16:02:51
category: javascript
draft: false
---

```toc
exclude: Table of Contents
from-heading: 1
to-heading: 5
```

# 1. Next.js

## 1-1. Next란

간단한 라우팅시스템과 서버사이드 렌더링을 지원하는 `리액트 프레임워크`

## 1-2. Next 사용하기

```
npm i next
```

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

scripts 에 next 명령어를 등록하면 npm 명령어로 next 명령어를 실행할 수 있다.

# 2. Routing system

next 프레임워크의 Routing system은 프로젝트 root 디렉토리 안의 pages 디렉토리에서 이루어진다.

## 2-1. index.js

next 프레임워크의 주소 체계에서

`'/'` 즉, 해당 프로그램의 homepage는 기본적으로 `index.js`를 실행한다.

그리고 pages 안에 디렉토리를 넣거나 js 파일 (정확히는 **리액트 컴포넌트**)을 넣으면 next 프레임워크에서 이를 반영해 자동으로 routing system을 구축해준다.

> pages/about.js => localhost:3000/about

> pages/user/me.jsx => localhost:3000/user/me

```jsx
const Index = () => <div>Hello!</div>
```

## 2-2. next/link

next 프레임워크에서 컴포넌트 내부 라우팅(`Link` 태그)을 지원한다.

```jsx
import Link from 'next/link'

const Main = () => (
  <Link href="/about">
    <a>어바웃페이지</a>
  </Link>
)
```

## 2-3. next/head

next 프레임워크에서 html head태그의 요소(link, meta, script 등등)도 컴포넌트 형태로 쉽게 쓸 수 있게 지원한다.

```jsx
import Head from 'next/head'

const Main = () => (
  <Head>
    <title>My page title</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
)
```

## 2-4. \_app.js

> Next.js uses the App component to initialize pages. You can override it and control the page initialization

프로그램의 `레이아웃` 역할을 하는 컴포넌트로 공통적으로 사용되는 요소들을 묶어서 최적화시키는 데 사용된다. `코드 스플리팅!`

직접 pages 디렉토리에 \_app.js 파일을 만들어 App 컴포넌트를 커스터마이징 할 수 있다.

```jsx
import React from 'react'
import { Container } from 'next/app'
import { GlobalStyle } from '../reset.css.ts'

const App = ({ Component }) => {
  return (
    <>
      {/* 이렇게 공통적으로 사용하는 styled-component 들을 가져오는 등 */}
      <GlobalStyle />
      <Container>
        {/* 여기 Component 컴포넌트(?)가 page들 역할을 한다 */}
        <Component />
      </Container>
    </>
  )
}
```

## 2-5. \_document.js

> A custom Document is commonly used to augment your application's <html> and <body> tags. This is necessary because Next.js pages skip the definition of the surrounding document's markup.

Document는 App보다 상위 개념으로 html, body, head 등 공통적으로 쓰이는 html요소들을 읽어오는데 사용된다.

\_app.js 와 마찬가지로 pages 디렉토리에 \_document.js 파일을 만들면 Document 컴포넌트를 커스터마이징 할 수 있다.

```jsx
import Document, { Html, Head, Main, NextScript } from 'next/document'

// :star: 클래스형 컴포넌트를 사용!
class MyDocument extends Document {
  // :star: getInitialProps로 SSR도 가능 (밑에서 계속)
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```

## 2-6. \_error.js

Error컴포넌트(에러메시지표시)도 커스터마이징해서 쓸 수 있다. (client-side , server-side 둘다 가능)

```jsx
function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
```

# 3. SSR (server-side rendering)

## 3-1. Link

(작성중)
