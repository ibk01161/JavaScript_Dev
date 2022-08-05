// 자동으로 자료형이 변환되는 경우 : 덧셈 '+' 연산자는 대입된 값에 따라 숫자형 또는 문자형으로 반환됨
//                                나머지 뺄셈, 곱셈, 나눗셈 연산자는 항상 숫자형을 반환                                
console.log("5" + 1);
console.log("5" - 1);
console.log("5" * 2);
console.log("There is " + 5);
console.log("Five" * 2);

console.log("\n");

// 연산자를 활용한 자료형 변환
var str = 5 + "1";              // 덧셈 연산자 + 가 다른 자료형끼리의 연산에서 숫자형보다 문자형을 우선순위로 처리
console.log(str);
console.log(typeof str);

console.log("\n");

// 단항 양수 + 를 통해 문자형을 숫자형으로 변환할 수 있음
var num = +str;
console.log(num);
console.log(typeof num);

console.log("\n");

// 함수를 활용한 자료형 변환 (명시적으로 자료형을 변환할 때에는 '내장 객체 함수' 사용)
// 1. String 함수 (숫자형 -> 문자형)
str = String(num);
console.log(str);
console.log(typeof str);

console.log("\n");

// 2. Number 함수 (문자형 -> 숫자형)
num = Number(str);
console.log(num);
console.log(typeof num);