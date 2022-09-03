// 배열 요소가 특정 조건을 만족하는지 확인하기 (some)
const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];

const isHunAHere = arr.some(el => el.name == '현아');           // 객체 요소 중 name 속성 값이 '현아'인지 확인, arr 배열의 3번째 요소까지 순환하면 해당 문자열을 확인할 수 있음
const olderThanSix = arr.some(el => el.age > 6);                // age 속성값이 숫자 6보다 큰 요소가 있는지 확인, 배열 마지막까지 순환핵도 6보다 큰 요소가 없어 false 반환 후 함수 처리 종료

console.log(isHunAHere);
console.log(olderThanSix);