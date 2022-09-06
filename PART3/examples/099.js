// 배열 내 값을 누적시키기 (reduce)
const numArr = [1, 2, 3, 4, 5];

// reduce의 callback 함수 매개변수로, 첫 번째 acc(누적된 값)과 el(현재 요소값)을 정의
// 매개변수로 전달된 acc와 el 를 합산하여, callback 함수 결과값으로 반환, 이렇게 반환된 값은 reduce로 순환된 다음 요소 차례에서 acc으로 할당되어 전달됨
// return으로 반환된 값은 다음 배열 요소의 acc이 된다는 의미, 또한 배열의 모든 요소들을 순환하고 난 마지막 반환값이 바로 reduce 메소드의 결과값이 됨
const result = numArr.reduce((acc, el) => {
    return acc + el;
}, 0);                                          // 초기값으로 숫자 0을 대입, 이 초기값은 첫 번째 요소에서는 acc로 대입

console.log(result);