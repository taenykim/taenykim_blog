---
title: javascript cheatsheet (v.20.02.20)
date: 2020-02-20 14:02:31
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

> reduce

:hatched_chick: 정규표현식 다시보기!

# 1. String

## 1-1. length - 문자열 길이

```js
String.prototype.length
```

## 1-2. trim() - 문자열 양 끝 공백제거

```js
const greeting = '   Hello world!   '

greeting.trim()
// 'Hello world!';
```

## 1-3. substring(), substr() - 서브스트링

```js
const str = '01234'
str.substring(1, 3)
// parameter : (처음 index, 마지막 index)
// "12"
str.substr(1, 2)
// parameter : (처음 index, 길이)
// "12"
```

## 1-4. charAt() - 해당 index 에 있는 문자 찾기

```js
const str = '아구아구'
str.charAt(2)
// "아"
```

## 1-5. indexOf() - 해당 문자의 index찾기(앞에서부터)

> Array 도 가능

```js
const str = '아구아구'
str.indexOf('아')
// 0
str.indexOf('뀨')
// -1
```

## 1-5. lastIndexOf() - 해당 문자의 index찾기(뒤에서부터)

> Array 도 가능

```js
const str = '아구아구'
str.lastIndexOf('아')
// 2
str.lastIndexOf('뀨')
// -1
```

## 1-6. toLowerCase(), toUpperCase() - 대소문자 변환

```js
const str = 'Taeny'
str.toLowerCase()
// taeny
str.toUpperCase()
// TAENY
```

## 1-7. split() - 문자열을 나눠서 배열로 저장

```js
const str = 'hi hello bye'
const arr = str.split(' ')
// ["hi", "hello", "bye"]
```

## 1-8. replace() - 문자열 교체

```js
const str = 'cat is barking'
str.replace('cat', 'dog')
// "dog is barking"
```

# 2. Object

## 2-1. Object.keys(), Object.values() - 객체 keys, values 읽기

```js
const obj = { name: '태은', age: 3 }
const keys = Object.keys(obj)
// ['name', 'age']
const values = Object.values(obj)
// ['태은', 3]
```

## 2-2. Object.assign() - 객체 병합

```js
const obj = { a: 1, b: 2 }
const obj2 = { b: 4, c: 5 }
Object.assign(obj, obj2)
// obj { a: 1, b: 4, c: 5 }
```

## 2-3. obj.key = value - 객체 속성 추가/수정

```js
const obj = { x: 1 }
obj.y = 2
// obj {x: 1, y: 2}
```

## 2-4. delete obj.key - 객체 속성 제거

```js
const obj = { x: 1, y: 2 }
delete obj.y
// obj {x: 1}
```

# 3. Array

## 3-1. forEach() - 배열 요소 실행

```js
const array1 = ['a', 'b', 'c']
const array2 = []

array1.forEach(element => console.log(element))
// a b c
array1.forEach(element => array2.push(element))
// array2 ['a', 'b', 'c']
```

## 3-2. concat() - 배열 합치기

> String도 가능

```js
const arr = [1, 2, 3, 4]
const arr2 = arr.concat([5, 6])
// [1,2,3,4,5,6]
const arr3 = arr.concat(5)
// [1,2,3,4,5]
```

## 3-3. slice() - 배열 자르기 (수정x)

> String도 가능

```js
const arr = [1, 2, 3, 4]
const arr2 = arr.slice(1, 3)
// parameter : (처음 index, 마지막 index)
// arr2 [2,3]
```

## 3-4. splice() - 배열 수정 (수정o)

```js
const arr = [1, 2, 3, 4]
arr.splice(1, 1, 'add')
// parameter : (처음 index, 삭제할 요소 개수, 추가할 요소들...)
// arr [1, "add", 3, 4]
```

## 3-5. filter() - 조건에 맞는 새로운 배열 생성

```js
const arr = [1, 2, 3, 4]
const arr2 = arr.filter(v => v > 2)
// parameter : (조건 함수)
// arr2 [3,4]
```

## 3-6. map() - 조건을 적용한 새로운 배열 생성

```js
const arr = [1, 2, 3, 4]
const arr2 = arr.map(v => v * 2)
// parameter : (조건 함수)
// arr2 [2,4,6,8]
```

## 3-7. join() - 배열을 병합하여 문자열로 반환

```js
const arr = ['Hi', 'Hello', 'Bye']
const str = arr.join()
// Hi,Hello,Bye
const str2 = arr.join('')
// HiHelloBye
```

# 4. Array(stack)

## 4-1. push() - 배열 뒤에 추가

```js
const arr = [1, 2, 3, 4]
arr.push(5)
// arr [1,2,3,4,5]
```

## 4-2. pop() - 배열 마지막 요소 추출

```js
const arr = [1, 2, 3, 4]
const data = arr.pop()
// arr [1,2,3]
// data 4
```

# 5. Array(queue)

## 5-1. unshift() - 배열 앞에 추가

```js
const arr = [1, 2, 3, 4]
arr.unshift(0)
// arr [0,1,2,3,4]
```

## 5-2. shift() - 배열 맨앞 요소 추출

```js
const arr = [1, 2, 3, 4]
const data = arr.shift()
// arr [2,3,4]
// data 1
```

# 6. Array(sort)

## 6-1. 기본 sort - 유니코드 기준

```js
;[1, 10, 101, 20].sort()
// [1, 10, 101, 20] 문자로 인식
```

## 6-2. 오름차순 sort - 숫자 기준

```js
;[1, 10, 101, 20].sort((a, b) => a - b)
// parameter : (조건식 함수)
// [1, 10, 20, 101] 숫자로 인식
```

# 7. 정규표현식(문법)

## 7-1. 규칙1 (정규식 문자표현)

`\w`
: 문자(character), [0-9a-zA-Z_]와 같은 문법

`\W`
: \w가 아닌것

`\d`
: 숫자, [0-9]와 같음

`\D`
: /d가 아닌것

`\s`
: 공백문자

`\n`
: 개행문자

`.` (와일드카드)
: 모든 문자

## 7-2. 규칙2 (정규식 패턴)

`[]`
: 이 속에 있는 거 하나라도 있으면 매칭, \[abc\]\[a-z\] \[0-9\] 등

`[^]`
: 해당 조건 문자 제외하고 매칭, \[\^abc\] a랑b랑c는 모두 제외함

`?`
: 앞 문자가 있을 수도 없을 수도 있다

`^ $`
: 문자열의 처음과 끝을 의미 /m과 같이써야함 (멀티라인)

`+ *`

\+ : 앞 문자가 1개 이상 있어야 매칭 a1 a12 a 에서 a는 매칭x

\* : 앞 문자가 0개 이상 있으면 매칭 a1 a12 a 에서 a도 매칭

```js
const str = 'A AA AAA Aa'
str.match(/AA+/g)
// ["AA", "AAA"]
str.match(/AA*/g)
// ["A", "AA", "AAA", "A"]
```

`{n}`

{n} : 앞 문자가 n개 이상있음

{n,m}, {n, } : 앞 문자가 n개 이상 (m개 이하)

`()`

:question: 아직이해못함 split()시 나도 포함시켜줘! 이런의미로 우선 이해함!

```js
const str = '#감성 #감성사진 좋다! #맞팔'
str.split(/#[^\s]+/g)
// ["", " ", " 좋다! ", ""]
str.split(/(#[^\s]+)/g)
// ["", "#감성", " ", "#감성사진", " 좋다! ", "#맞팔", ""]
```

## 7-3. 규칙3 (전후방탐색)

`탐색할문자(?=조건)`

```
/\d+(?=px)/g
```

뒤에 px을 빼고 숫자만 가져옴

`(?<=조건)탐색할문자`

```
(?<=\$)\d+
```

앞에 \$를 빼고 숫자만 가져옴

## 7-4. /flag

`/g`
: 둘 이상의 일치 항목을 찾음

`/i`
: 대소문자 구분 없이 찾음

`/m`
: 주어진 문자열에 줄바꿈이 있을 경우, 여러 줄로 취급하여 찾음

# 8. 정규표현식(메소드)

## 8-1. match() - 정규표현식에 해당하는 문자 여부 찾고 배열 반환

```js
const str = '#hi #hello man #bye'
str2.match(/#[^\s]+/g)
// ["#hi", "#hello", "#bye"]
```

## 8-2. search() - 정규표현식에 해당하는 문자가 몇번째 index에 있는지 찾기

> String.prototype.indexOf 와 같음

```js
const str = 'abcd'
str.search(/b/g)
// 1
```

# 9. Math 객체

## 9-1. Math.ceil() - 올림

## 9-2. Math.floor() - 내림

## 9-3. Math.round() - 반올림

## 9-4. Math.random() - 난수생성 (0<=x<1)

## 9-5. Math.max(), Math.min() - 최대,최소값

> 배열일 경우,

```js
Math.max(...[1, 2, 3, 6, 4])
// 6
Math.max.apply(null, [1, 2, 3, 6, 4])
// 6
```

## 9-6. Math.pow(x,y), Math.sqrt() - 제곱, 제곱근
