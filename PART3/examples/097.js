// 배열의 특정 조건을 충족하는 요소 찾기 (find)
const arr = [
    {name: '우림', age: 2},
    {name: '현아', age: 5},
    {name: '탄이', age: 30},
    {name: '현일', age: 3},
    {name: '혜림', age: 6},
];

// callback 함수에 정의된 조건식은 각 요소의 age 속성이 숫자 30과 일치하는지 확인, 내부 요소 중 age 속성이 30과ㅓ 일치하는 첫 번째 요소가 myFriend 변수에 대입
const myFriend = arr.find(a => a.age === 30);
console.log(myFriend);