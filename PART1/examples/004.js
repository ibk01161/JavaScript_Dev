// 숫자형 (Number)
var x = 5;

// 문자형 (String)
var y = 'five';

// 불린형 (Boolean)
var isTure = true;

// null, undefined
var empty = null;
var nothing;

// Symbol
var sym = Symbol('me');

// 객체 (Object)
var item = {
    price : 5000,
    count : 10
};

// 배열 (Array)
var fruits = ['apple', 'orange', 'kiwi'];

// 함수 (function)
var addFruit = function (fruit) {
    fruits.push(fruit);
}

addFruit('watermelon');

console.log(fruits);
console.log(empty);
console.log(nothing);