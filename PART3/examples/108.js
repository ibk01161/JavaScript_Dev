// 10진수 아닌 진법을 다른 진법으로 변환하기 (parseInt)
const bin = 1000010011;
const oct = 1023;
const hex = 213;

const dexByBin = parseInt(bin, 2);                  // 글로벌로 어디서든 호출 가능한 parseInt에 bin 변수와 숫자 2를 넣음 => bin 변수가 2진수라는 의미, 2진수 값을 10진수로 변환
const dexByOct = parseInt(oct, 8);                  // 8진수 값을 10진수로 변환
const dexByHex = parseInt(hex, 16);                 // 16진수 값을 10진수로 변환
const hexByOct = parseInt(oct, 8).toString(16);     // 8진수 갓을 10진수로 변환, 그리고 toString(16)을 통해 10진수의 값을 16진수로 연달아 변환

console.log(dexByBin);
console.log(dexByOct);
console.log(dexByHex);
console.log(hexByOct);