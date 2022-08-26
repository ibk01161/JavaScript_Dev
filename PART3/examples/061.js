const str = 'JavaScript';
const strObj = new String('JavaScript');

const num = 200;
const numObj = new Number(200);

const bool = true;
const boolObj = new Boolean(true);

const func = function() {};
const arr = [10, 200, 4000];
const obj = {a1: 'test'};
const empty = null;
const notCalleed = undefined;

// typeof는 특정 원시 자료형을 확인하거나, 원시 자료형과 객체형을 구분하기 위해 활용하는 것이 좋음
console.log(typeof str === 'string');
console.log(typeof strObj === 'object');
console.log(typeof num === 'number');
console.log(typeof numObj === 'object');
console.log(typeof bool === 'boolean');
console.log(typeof boolObj === 'object');
console.log(typeof func === 'function');
console.log(typeof arr === 'object');
console.log(typeof obj === 'object');
console.log(typeof empty === 'object');
console.log(typeof notCalleed === 'undefined');

console.log('\n');

// 만일 객체를 확인하고 싶다면, instanceof를 사용하는 것이 좋음
// instanceof는 원시 타입을 확인하는데 적합하지 않지만, 어떤 객체인지 구분하는데 용이
// instanceof는 어떤 종류의 객체인지 확인하는데 주로 활용됨
// 원시 타입에 대한 결과는 false로 반환하고, 내장 객체로 선언된 변수는 true를 반환
console.log(str instanceof String);
console.log(strObj instanceof String);
console.log(num instanceof Number);
console.log(numObj instanceof Number);
console.log(bool instanceof Boolean);
console.log(boolObj instanceof Boolean);
// 함수, 배열, 객체는 각각 Object를 상속받은 내장 객체 => true 반환
console.log(func instanceof Function);
console.log(arr instanceof Array);
console.log(obj instanceof Object);
// null은 Object를 상속받은 객체가 아님
console.log(empty instanceof Object);
console.log(notCalleed instanceof undefined);           // undefined는 객체가 아니기 때문에 에러 발생