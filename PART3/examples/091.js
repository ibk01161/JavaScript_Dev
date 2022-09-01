// 배열 순환하기 (forEach)

// 객체 자료형
const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];

arr.forEach((el) => {                           // 배열 arr의 forEach 호출, 배열의 내부 요소는 callback 함수의 변수 el로 전달됨
    console.log(el.name);                       // 객체 el의 속성name을 콘솔 출력
});