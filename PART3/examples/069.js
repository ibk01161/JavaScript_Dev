// 문자열 자르기 ② (substring)
const sentence = 'This will be the end of Wakanda';

console.log(sentence.substring(13));                // 두 번째 인자 없이 첫 번재 인자에만 13 대입, 13번째 인덱스부터 마지막까지의 문자열 반환
console.log(sentence.substring(13, 20));            // 13부터 20까지의 문자열 반환
console.log(sentence.substring(0));                 // 인덱스 0은 첫 번째 문자를 의미, 두 번째 인자가 없기 때문에 처음부터 끝까지 전체 문장 출력
console.log(sentence.substring(0, -20));            // 음수를 넣으면 정상적으로 수행하지 않음
console.log(sentence.substring(50));                // 문자열 길이를 뛰어넘는 숫자를 넣으면 빈 값을 반환
console.log(sentence.substring(20, 13));            // 첫 번재 인자보다 두 번째 인자가 크면 두 개의 인수를 교환하여 수행
