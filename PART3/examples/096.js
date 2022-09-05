// 배열의 특정 조건을 기준으로 필터링하기 (filter)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredTwo = arr.filter(a => {                   // filter 메소드의 callback 함수를 통해, arr 배열의 내부요소가 각각 a 변수로 할당됨
    console.log(`현재 위치의 값은 ${a} 입니다.`);         // 순환하는 진행 상황을 알 수 있는 콘솔 출력
    return a % 2 == 0;
});
console.log(filteredTwo);                               // filter 메소드는 callback 함수의 결과값이 true를 만족하는 요소를 새로운 배열로 모아 반환

const filteredThree = arr.filter(a => a % 3 == 0);
console.log(filteredThree);