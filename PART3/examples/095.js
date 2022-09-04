// 모든 배열 요소가 특정 조건을 만족하는지 확인하기 (every)
const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];

const isAllHyunA = arr.every(el => el.name == '현아');          // 객체 요소의 name 속성값이 '현아'인지 확인, arr 배열의 첫 번재 요소가 '혜림' 이기 때문에 fasle 반환
const youngerThanSevenAll = arr.every(el => el.age < 7);        // 객체 요소의 age 속성값이 모두 숫자 6보다 작은지 확인 (마지막까지 순환) => true

console.log(isAllHyunA);
console.log(youngerThanSevenAll);