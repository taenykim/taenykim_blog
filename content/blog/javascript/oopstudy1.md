---
title: 👨‍💻 자바스크립트 코딩 컨벤션과 테스트 - OOP Study 1
date: 2020-04-20 18:04:99
category: javascript
draft: false
---

![](./images/oopstudy1.png)

4월부터 스터디를 시작했다. 스터디는 java 언어를 사용하지만 나는 javascript를 사용해서 참여하고 있다..!😂 실제 코드에 대한 피드백은 많이 받지 못해서 아쉽지만 java와 javascript 각각의 언어의 개발철학도 비교해볼 수도 있고 무엇보다 언어에 국한되지 않는 프로그래밍 기본 원칙들, 코드 짜는 방법에 대해서 많이 생각해볼 수 있는 좋은 시간이 될 것이라고 생각한다. 매주 알게된 내용이나 정리할만 한 내용을 기록하려한다.

<hr/>

```toc
exclude: Table of Contents
from-heading: 1
to-heading: 2
```

## \#. Series

<details>
<summary>시리즈 한눈에보기[접기/펼치기]</summary>
<div markdown="1">

- [자바스크립트 코딩 컨벤션과 테스트 - OOP Study 1](https://taeny.dev/)

</div>
</details>

## \#\#. Source

<details>
<summary>깃허브 소스[접기/펼치기]</summary>
<div markdown="1">

- [java-baseball](https://github.com/taenykim/java-baseball)

- [java-racingCar](https://github.com/taenykim/java-racingCar)

- [java-lotto](https://github.com/taenykim/java-lotto)

</div>
</details>

## 1. 매직넘버 상수화

**매직넘버**는 설명 없이 무작정 등장하는 상수를 의미한다.

`if`같은 제어문이나 `for`같은 반복문에서 많이 등장하며, 매직넘버를 사용하면 코드를 수정할 때 일일이 다 수정해야한다는 번거로움 뿐만 아니라 코드를 보고 이해하는데 큰 어려움을 준다. 그래서 이러한 매직넘버는 `const` 키워드를 통해 함수 상단에 상수 변수에 넣어준 후, 사용해주는 것이 좋다.

> 아래 [코드](https://github.com/taenykim/java-baseball)는 숫자야구 랜덤숫자를 문자열에 담는 함수인데 반복문 내부에 매직넘버 3을 사용했다.

```js
const chooseRandomNumber = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  answerNum = ''
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * (9 - i))
    const chosenNumber = numbers.splice(randomNumber, 1)[0]
    const chosen = String(chosenNumber)
    answerNum += chosen
  }
  return answerNum
}
```

> BASEBALL_NUMBER_LENGTH 라는 변수에 3을 초기화해줌으로써, 매직넘버를 없애주었다.

```js
const chooseRandomNumber = () => {
  const BASEBALL_NUMBER_LENGTH = 3
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  answerNum = ''
  for (let i = 0; i < BASEBALL_NUMBER_LENGTH; i++) {
    const randomNumber = Math.floor(Math.random() * (9 - i))
    const chosenNumber = numbers.splice(randomNumber, 1)[0]
    const chosen = String(chosenNumber)
    answerNum += chosen
  }
  return answerNum
}
```

<hr/>

## 2. 변수 네이밍 규칙

먼저 자바스크립트에서는 변수명 **첫글자**에 글자 혹은 \_, \$만 올 수 있다. 그 이외의 숫자나 다른 특수문자는 에러를 출력한다.

```js
const 1num; // x
const num1 // o

const _name; // o
const $name; // o
```

<hr/>

지역변수나 private 변수의 경우에는 `_`를 사용한다.

```js
let _privateVariableName
let _privateFunctionName
```

<hr/>

그리고 예약어는 변수명으로 불가능하다. 마찬가지로 에러를 출력한다. [MDN 예약어 모음](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar)

```js
const true; // x
const case; // x
const break; // x
// ...
```

<hr/>

그리고 변수명은 일반적으로 **카멜케이스**와 **스네이크케이스**를 혼용해서 작성한다.

`카멜케이스`는 여러 단어가 들어가는 변수명일 경우, 첫단어의 첫글자는 소문자로, 두번째부터의 첫글자는 대문자로 작성하는 표기법이다.

```js
let myname = 'taeeun' // bad
let myName = 'taeeun' // good
```

`스네이크케이스`는 여러 단어가 들어가는 변수명일 경우, \_를 통해 띄어서 표기하는 방법이다.

```js
const MAXLENGTH = 10 // bad
const MAX_LENGTH = 10 // good
```

> 보통 상수에 스네이크케이스를, 일반적인 변수에는 카멜케이스를 사용하는 것 같다.

<hr/>

## 3. 변수에 타입이나 자료구조형 명시하지 않기

변수를 네이밍할 때는 굳이 타입이나 **자료구조형을 명시하지 않는 것**이 좋다.

그 이유는 해당 변수의 타입이나 자료구조형을 바꿀 경우, 모든 변수이름을 바꿔줘야 하기 때문이다. 변수 네이밍은 그 변수의 형식보다는 할당된 값의 의미를 드러내는 것이 좋다.

> 함수의 경우

```js
// bad
const compareTwoArray = (numbers1, numbers2) => {}
// good!
const compareNumbers = (numbers1, numbers2) => {}
```

> 배열의 경우

```js
const numberArr = [1, 2, 3, 4]
const numbers = [1, 2, 3, 4]
```

<hr/>

## 4. 중복된 기능 피하기

중복된 기능은 최대한 피하고 가능한 주어진 field를 사용한다.

해당 [코드](https://github.com/taenykim/java-racingCar)는 자동차를 생성하고 사용자가 입력한 숫자만큼 랜덤으로 각각의 자동차를 이동시켜 가장 멀리간 자동차를 출력하는 프로그램이며,

처음 코드를 작성할 때, 나는 기존에 자동차 객체 car 내부 position 값이 있으면서도 자동차의 이동한 거리를 전역에 carDistances 배열에 따로 저장했었다.

> bad..!

```js
class Car {
  name
  position = 0

  constructor(name) {
    this.name = name
  }
  go() {
    this.position = this.position + 1
  }
}
```

```js
const carDistances = [] // 각각의 자동차 이동거리
moveCar(car, carNames, carDistances) // 자동차를 이동시키고 carDistances 값 변경
```

```js
// getWinner 함수에서도 불필요하게 carDistances 배열을 받아야한다.
const getWinner = (carNames, carDistances) => {
  const max = Math.max(...carDistances)
  let winner = ''

  for (let i = 0; i < carNames.length; i++) {
    if (max === carDistances[i]) winner += `${carNames[i]},`
  }
  return winner
}
```

하지만 배열 대신 car.position 을 사용하면 코드도 깔끔해지고 불필요한 메모리 낭비를 막을 수 있다.

> good 👍

```js
moveCar(car) // moceCar 함수는 car객체의 position만 올려주는 역할만 수행!
```

```js
// getWinner 함수는 car객체들이 들어있는 cars 배열만 받고 position 비교만 해주는 역할만 수행!
const getWinner = cars => {
  let max = 0
  cars.map(car => {
    if (car.position > max) max = car.position
  })
  let winner = []

  cars.map(car => {
    if (max === car.position) winner.push(car.name)
  })

  return winner.join()
}
```

쓸데없는 중복은 꼭 피하고 각각의 함수는 정말 **자기의 기능만 수행할 수 있도록** 짜는 것이 좋다.

## 5. 각각의 함수는 자기 기능만 수행하기

스터디 미션 프로그래밍 요구사항에서는 항상 이러한 조건이 들어있었다.

|     | 조건                                                        |
| --- | ----------------------------------------------------------- |
| 1   | 최대한 indent(인덴트, 들여쓰기) depth를 2이상 쓰지 않아야함 |
| 2️  | 함수 (또는 메소드)의 길이가 10라인을 넘어가지 않도록 구현   |

이는 함수를 최대한 자기 기능만 수행할 수 있도록 쪼개는 것을 요구한다. 함수를 쪼개므로서, 가독성과 유지보수가 좋아지며, 안정성은 올라간다.

> OO makes code understandable by encapsulating moving parts. FP makes code understandable by minimizing moving parts. -Michael Feathers

> 객체지향은 동작하는 부분을 캡슐화해서 이해할 수 있게 하고, 함수형 프로그래밍은 동작하는 부분을 최소화해서 코드 이해를 돕는다. - 마이클 페더스

자바스크립트는 다른 객체지향 프로그래밍 언어들에 비해 더 유연한 특징을 가지지만 객체지향 프로그래밍을 지원하며, 또한 함수형 프로그래밍도 지원한다. 여기서 **지원**한다는 의미는 완벽한 언어의 특성은 아니지만 비슷하게 구현은 가능하다는 말이다. 완벽하게 객체지향적으로 코드를 작성하고 모든 함수를 함수형 프로그래밍으로 작성하는 것은 어렵겠지만 지향점을 잘 파악하고 최대한 **좋은 코드**를 작성하고자 하는 것이 중요하지 않을까? 생각해보았다.

<hr/>

## 6. 반복문 끊어주기 (break, return)

다음 함수는 사용자가 입력한 자동차이름이 5글자 초과인지 검사하는 [함수](https://github.com/taenykim/java-racingCar)이다.

해당 함수는 입력한 값의 길이만큼 반복문을 돌면서 조건을 만족하면 errorCheck 변수를 바꾸도록 짜서 중간에 조건이 만족하여도 불필요하게 모든 반복문을 수행했다.

> bad...!

```js
const checkCarsNameLength = carNames => {
  const MAX_CARNAME_LENGTH = 5
  let errorCheck = true

  for (let i = 0; i < carNames.length; i++) {
    if (carNames[i].length > MAX_CARNAME_LENGTH) errorCheck = false
  }
  // 이름이 5초과인 것이 있으면 false를, 없으면 true를 리턴.
  return errorCheck
}
```

하지만 조건을 만족했을 때 바로 값을 return 하도록 바꿨더니 변수를 쓰지않아도 되고, 조건 만족시, 반복문도 전부 탐색하지 않아도 되었다.

> good!!👍

```js
const checkCarsNameLength = carNames => {
  const MAX_CARNAME_LENGTH = 5
  for (let i = 0; i < carNames.length; i++) {
    if (carNames[i].length > MAX_CARNAME_LENGTH) return false
  }
  return true
}
```

이렇게 불필요한 변수를 줄이고, **return** 과 **break** 로 가능하면 반복문을 빠르게 빠져나올 수 있도록 짜는 것이 좋다.

## 7. 타입스크립트 사용하기

java 스터디여서 주어진 미션은 객체지향적인 `class Type`을 주로 사용했다. 자바스크립트에도 class 문법이 있어서 코딩은 가능했지만, 타입이 지정되어있지 않아서 코드를 짜면서 현재 변수가 어떤 타입인지가 매우 헷갈렸다.

> Car객체 배열을 인자로 받는 [함수](https://github.com/taenykim/java-racingCar)의 경우

```ts
// javascript : 배열인데, 내부 요소들의 타입이 불명확함
makeCars(cars, carNames)
// typescript : 배열 내부 타입 명시로 에러방지 + 헷갈림방지!
makeCars(cars: Car[], carNames: string[])
```

다음 [코드](https://github.com/taenykim/java-lotto)는 로또를 구매하고 당첨로또와 비교하는 프로그램이며, 로또 한장을 의미하는 `Lotto` 타입과 실제 당첨로또를 의미하는 `WinningLotto` 타입이 따로 정의되어있어 더욱 헷갈렸다.

```js
/**
 * 로또 한장을 의미하는 객체
 */
class Lotto {
  numbers = []

  constructor(numbers) {
    this.numbers = numbers
  }
}
```

```js
/**
 * 당첨 번호를 담당하는 객체
 */
class WinningLotto {
  lotto = null
  bonusNo = 0

  constructor(lotto, bonusNo) {
    this.lotto = lotto
    this.bonusNo = bonusNo
  }

  match(userLotto) {
    let count = 0
    let bonusCount = 0
    this.lotto.numbers.map(number => {
      userLotto.numbers.indexOf(number) >= 0 && count++
    })
    userLotto.numbers.indexOf(this.bonusNo) >= 0 && bonusCount++
    if (count === 6) return 'FIRST'
    if (count === 5 && bonusCount) return 'SECOND'
    if (count + bonusCount === 5) return 'THIRD'
    if (count + bonusCount === 4) return 'FOURTH'
    if (count + bonusCount === 3) return 'FIFTH'
    return 'MISS'
  }
}
```

```ts
// javascript : 함수의 인자로 들어가는 변수명들이 매우 헷갈림!!
matchLottos(myLottos, winningLotto)
// typescript : 내부 타입 명시로 에러방지 + 헷갈림방지!
matchLottos(myLottos: Lotto[], winningLotto: WinningLotto): void
```

아직 타입스크립트는 익숙치 않지만, 이 기회에 같이 학습하면 좋을 것 같다.

## 8. 테스트코드 작성하기

2020년 4월 18일, 잠실 오프라인 스터디에서 `테스트` 에 대해서 배웠다.

스터디에서는 java 테스팅 프레임워크 JUnit 를 사용했는데, 나는 자바스크립트이기 때문에 jest라는 프레임워크를 선택해서 한번 테스트 해보았다.

사용방식은 비슷했다.

먼저 jest 프레임워크를 설치하고,

```
npm i -D jest
```

`package.json` 파일의 script에 jest 명령어를 추가시켜주면 된다. 실행시 : `npm run test`

```json
  "scripts": {
    "test": "jest"
  }
```

그리고 test 디렉토리를 만들어 해당 테스팅 파일.js 을 생성해주면 되었다.

```js
// calculatorTest.js
class Calculator {
  add(i, j) {
    return i + j
  }
  subtract(i, j) {
    return i - j
  }
  multiple(i, j) {
    return i * j
  }
  divide(i, j) {
    return i / j
  }
}

test('덧셈', () => {
  let calculator = new Calculator()
  expect(calculator.add(1, 2)).toBe(3)
})

test('뺄셈', () => {
  let calculator = new Calculator()
  expect(calculator.subtract(1, 2)).toBe(-1)
})

test('곱셈', () => {
  let calculator = new Calculator()
  expect(calculator.multiple(1, 2)).toBe(2)
})

test('나눗셈', () => {
  let calculator = new Calculator()
  expect(calculator.divide(2, 1)).toBe(2)
})
```

jest API의 test라는 메소드를 사용했는데, jest API 메소드도 다양하게 있는 것 같다. 시간날 때 [jest 공식문서](https://jestjs.io/docs/en/api)를 한번 쭉 볼 것.

```js
test("테스트 이름", function, timeout)
```

<hr/>

## 9. 테스트코드 작성규칙 & 팁

1️⃣ 테스트 이름은 **한글로 작성**하는 것이 좋다. 위의 테스트는 매우 간단하지만 프로그램이 복잡해지면 테스트명도 길어질 것이고 각각 테스트마다 이해하기 쉽고 의미를 잘 전달해주어야 하기 때문이다.

2️⃣ 테스트는 가장 작은 단위의 기능부터 테스트한다. 예를들어, A,B가 C라는 기능에 의존될 경우, A,B를 테스트하고 검증이 완료되면 C에서 A,B가 포함되지 않은 기능만 테스트하면 된다.

3️⃣ 하나의 테스트는 독립적이어야 한다. 테스트끼리 의존해서는 안된다.

<hr/>

## 10. 참고

[https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/#promise-executor-%ED%95%A8%EC%88%98](https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/#promise-executor-%ED%95%A8%EC%88%98)

[https://rinae.dev/posts/functional-js-tutorial](https://rinae.dev/posts/functional-js-tutorial)

[https://velog.io/@nakta/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%A0%91%ED%95%B4%EB%B3%B4%EB%8A%94-%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-](https://velog.io/@nakta/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%A0%91%ED%95%B4%EB%B3%B4%EB%8A%94-%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-)

[https://futurecreator.github.io/2018/10/05/why-functional-programming/](https://futurecreator.github.io/2018/10/05/why-functional-programming/)

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)

[https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)

[https://www.zerocho.com/category/JavaScript/post/576cafb45eb04d4c1aa35078](https://www.zerocho.com/category/JavaScript/post/576cafb45eb04d4c1aa35078)

[https://meetup.toast.com/posts/90](https://meetup.toast.com/posts/90)

<hr/>

## 11. 마치며.

좋은 기회가 있어서 OOP 스터디를 하게 되었다. 비록 java 스터디지만 스터디를 하면서 많은 것들을 배우는 것 같다. 평소에 기능구현 위주의 공부를 했다면 이번 스터디를 통해서는 **코드를 작성하는 방법**에 대해서 많이 생각해볼 수 있어서 좋았다. 현재는 테스트 코드 작성에 관한 미션을 진행 중에 있는데 앞으로 더 열심히 임해야겠다!!
