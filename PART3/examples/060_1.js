const str1 = '자바스크립트 200제';                          // 원시 자료형으로 선언
const str2 = new String('자바스크립트 200제');              // 표준 내장 객체인 String 객체로 선언

console.log(typeof str1);
console.log(typeof str2);                                   // String 이란 이름의 객체이기 때문에 object 반환

console.log('\n');

console.log(str1 === '자바스크립트 200제');                     // 원시 자료형으로 대입된 str1은 값 자체가 할당되어 있어 true를 반환
console.log(str2 === new String('자바스크립트 200제'));         // String 객체로 대입된 str2는 값이 아닌 주소값을 참조하기 때문에 일치하지 않아 false 반환

console.log('\n');

// * valueOf() : Stribng 내장 객체에 정의된 메소드, 문자열을 반환하는 메소드
console.log(str1.valueOf());                                    // 원시 자료형인 str1도 String 내장 객체가 지원하는 메소드를 사용할 수 있음
console.log(str2.valueOf());