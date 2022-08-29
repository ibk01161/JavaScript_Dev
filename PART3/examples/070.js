// 문자열 자르기 ③ (substr)
const sentence = 'Wakanda Forever!!!';

console.log(sentence.substr(8));                // 첫 번째 인자에만 인덱스 8을 대입, 두 번재 인자에 길이를 지정하지 않았기 때문에 변수 sentence의 8번째 인덱스 부터 마지막까지의 문자열 반환
console.log(sentence.substr(8, 7));             // 8번째 인덱스의 뭄ㄴ자부터 뒤이어 7개의 문자들을 반환
console.log(sentence.substr(0));                // 시작 인덱스 0은 첫 번재 문자를 의미, 두 번째 인자가 없기 때문에 처음부터 끝까지 전체 문장 출력
console.log(sentence.substr(-10));              // 첫 번째 인자에 음수를 넣으면 문자열의 뒤에서부터 위치를 결정, 뒤에서부터 10번째 문자인 F를 의미, 두 번재 인자가 없기 때문에 마지막까지 반환
console.log(sentence.substr(0, -3));            // 두 번째 인자에 음수를 넣으면 정상적으로 수행도지 않음
console.log(sentence.substr(30));               // 변수의 문자열 길이보다 큰 수를 첫 번재 인자에 대입하면 해당하는 인덱스를 찾지 못하기 때문에 빈 값 반환
console.log(sentence.substr(0, 30));            // 두 번째 인자가 변수 sentence 문자열 길이보다 크다면 기존 문자열보다 큰 길이를 의미

