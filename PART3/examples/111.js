// 특정 자리수에서 올림하기 (ceil)

const positiveNum = 93.54;
const negativeNum = -39.27;

console.log(Math.ceil(positiveNum));                    // 소수점 기준으로 올림
console.log(Math.ceil(negativeNum));                    // -39.27을 소수점 위치값 기준에서 '큰 값으로 올림'이라 생각하면 -39
console.log(Math.ceil(positiveNum * 10) / 10);          // 소수점 두 번째 자리에서 올림
console.log(Math.ceil(positiveNum / 10) * 10);          // 일의 자리에서 올림
console.log(Math.ceil(negativeNum * 10) / 10);          // 음의 실수 소수점 두 번째 자리에서 올림
console.log(Math.ceil(negativeNum / 10) * 10);          // 음의 실수 일의 자리에서 올림