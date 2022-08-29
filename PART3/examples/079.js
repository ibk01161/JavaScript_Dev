// 배열 요소를 분할 / 변환하기 (from)
const str = '12345678';

const distributedArr = Array.from(str);                                 // 구분자 없이 문자열을 하나씩 쪼개서 배열을 반환
console.log(distributedArr);

const modifiedArr = Array.from(distributedArr, e1 => e1 * 2);           // Array.from 의 두 번째 인자로 callback 함수를 넣을 수 있음
console.log(modifiedArr);