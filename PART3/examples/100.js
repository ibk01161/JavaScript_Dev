// 중첩된 배열을 단일하게 만들기 (reduce)
const arr = [1, [2, 3], [4, 5, 6], ['배열', '나열하기'], 'JavaScript'];         // 배열 안에 숫자형, 배열, 문자형 값이 나열되어 있음

// arr 배열의 reduce 메소드를 호출하여 요소를 순환, reduce의 결과값은 result 변수로 다시 대입
// callback 함수의 첫 번째 인자 acc와 현재 요소값인 el을 concat으로 병합
const result = arr.reduce((acc, el) => {
    return acc.concat(el);
}, []);                                         // 빈 배열이 초기값으로 할당, 빈 배열 []부터 연속으로 arr 내부 요소들을 차곡차곡 병합하게 됨

console.log(result);
