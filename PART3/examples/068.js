// 문자열 자르기 ① (slice)
const sentence = 'The sun will shine on use again';

console.log(sentence.slice(13));                // 종료 인덱스를 지정하지 않아 13번째 인덱스부터 마지막까지의 문자열 반환
console.log(sentence.slice(13, 24));            // 인덱스 13 부터 24까지의 문자열 반환
console.log(sentence.slice(0));                 // 인덱스 0은 첫 번째 문자를 의미, 두 번째 인자가 없기 때문에 처음부터 끝까지 전체 문장 출력
console.log(sentence.slice(0, -23));            // 음수는 인덱스를 문자열의 뒤에서부터 시작하여 인덱스를 셈하면 됨, 뒤에서부터 23번째 문자를 의미
console.log(sentence.slice(50));                // 문자열 길이를 뛰어넘는 숫자를 넣으면 빈 값을 반환
console.log(sentence.slice(7, 2));              // 첫 번째 인자보다 두 번째 인자가 크면 slice 함수는 정상적으로 수행되지 않음