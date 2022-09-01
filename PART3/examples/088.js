// 배열 특정 위치의 요소 추출하기 (slice)
const arr = ['melon', 'lemon', 'source', 'apple', 'juice'];
console.log(`과일이 아닌 요소는 ${arr.slice(2, 3)}와 ${arr.slice(4,5)} 입니다.`);
// 변수 arr의 시작 인덱스에 0은 배열 첫 번째를 의미, 배열 길이보다 더 큰 값을 끝 인덱스에 넣으면 배열 가장 마지막까지 모두 반환
console.log(arr.slice(0, 10));