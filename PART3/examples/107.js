// 진수 변환하기 (toString)
const dec = 531;

const binByDex = dec.toString(2);               // Number 객체의 메소드 toString 숫자 2를 인자로 넣으면 2진수로 변환
const octByDex = dec.toString(8);               // 8진수로 변환
const hexByDex = dec.toString(16);              // 16진수로 변환

console.log(binByDex);
console.log(octByDex);
console.log(hexByDex);