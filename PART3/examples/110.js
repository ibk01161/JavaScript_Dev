// 특정 자리수에서 반올림하기 (round)

const val = 573.926;

console.log(Math.round(val));
console.log(Math.round(val * 10) / 10);         // 소수점 두 번째 자리에서 반올림
console.log(Math.round(val * 100) / 100);       // 소수점 세 번째 자리에서 반올림
console.log(Math.round(val / 10) * 10);         // 일의 자리에서 반올림
console.log(Math.round(val / 100) * 100);       // 십의 자리에서 반올림