// 특정 자리수에서 내림하기 (floor)

const positiveNum = 93.54;
const negativeNum = -39.27;

console.log(Math.floor(positiveNum));                    // 소수점 기준으로 내림
console.log(Math.floor(negativeNum));                    // -39.27을 소수점 위치값 기준에서 '작은 값으로 내림'이라 생각하면 -40
console.log(Math.floor(positiveNum * 10) / 10);          // 소수점 두 번째 자리에서 내림
console.log(Math.floor(positiveNum / 10) * 10);          // 일의 자리에서 내림
console.log(Math.floor(negativeNum * 10) / 10);          // 음의 실수 소수점 두 번째 자리에서 내림
console.log(Math.floor(negativeNum / 10) * 10);          // 음의 실수 일의 자리에서 내림