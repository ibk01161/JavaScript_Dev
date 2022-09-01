// 배열 합치기 (concat)
const preList = [1, 2, 3];
const currentList = [4, 5, 6];
const nextList = [7, 8, 9];

// Array 내장 객체의 concat 메소드를 사용하여 배열을 병합함
// concat 함수는 여러 인자를 넣는 것이 가능, 배열 내부에는 인자에 넣은 순서대로 요소가 나열됨
console.log(preList.concat(currentList));
console.log(preList.concat(currentList, nextList));

console.log('\n');

// 간단하게 인자에 직접 리터럴 값을 넣을 수도 있음
// concat 함수를 호출하는 첫 번재 리터럴이 배열 자료형이여야만 Array 객체 메소드 concat이 실행됨
console.log(['배열'].concat('합치기'));
console.log(['배열'].concat('합치기', 'JavaScript200'));