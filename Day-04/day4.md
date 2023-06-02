# 객체 리터럴

## 객체란?
자바스크립트는 객체 기반의 프로그래밍 언어이며, 자바스크립트를 구성하는 거의 "모든 것"이 객체다.
객체는 0개 이상의 프로퍼티로 구성되 집합이며, 프로퍼티느 키와 값으로 구성된다.
프로퍼티 값이 함수일 경우, 일반 함수와 구분학 위해 메서드라 부른다.

```javascript
var counter = {
   num: 0,
   increase: function () {
      this.num++;
   }
};
```

## 객체 리터럴에 의한 객체 생성
- 객체 리터럴 -> 가장 일반적인 방법
- Object 생성자 함수
- 생성자 함수
- Object.create 메서드
- 클래스(ES6)

```javascript
var person = {
  name: 'Lee',
  sayHello: function () {
    console.log( 'Hello! My name is ${this.name}.' );
  }
};

console.log( typeof person ); // object
console.log( person ); // {name: "Lee", sayHello: f}

var empty = {}; // empty object
console.log(typeof empty}; // object
```

## 프로퍼티
```javascript
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: 'Lee',
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20
};

var obj = {};
var key = 'hello';

obj[key] = 'world';

console.log(obj); // {hello: "world"}

var foo = {
  name: 'Lee',
  name: 'Kim'
};

console.log(foo); // {name: "Kim"}
```

## 메서드
```javascript
var circle = {
  radius: 5, // <- 프로퍼티
  getDiameter: function() { // <- 메서드
    return 2 * this.radius; // this는 circle을 가리킨다.
  }
};

console.log(circle.getDiameter()); // 10
```
## 프로퍼티 접근
- 
