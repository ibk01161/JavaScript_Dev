// 배열 맨 앞 요소 추출하기 (shift)
const arr = [1, 2, 3];

console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());                   // 배열 요소 개수보다 많이 호출되면 undefined를 반환함, [1, 2, 3]의 shift() 호출 결과는 1 -> 2 -> 3 순서로 추출