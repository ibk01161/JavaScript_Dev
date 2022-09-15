// 정규표현식으로 문자열 확인하기 (match)

const str = 'To lose your path is the way to find that path';

const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi;
const findRangeRegex = /([a-f])\w+/i;
const findAllRangeRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));     // 문자열 'to' 와 대소문자까지 완전히 일치하는 문자열을 찾는 표현식, 인덱스 위치 29번째 'to' 문자열 정보가 반환됨
console.log(str.match(ignoreAllCaseRegex));     // 표현식에 i 플래그가 있으면 대소문자구분 무시, T,t / O,o 같은 문자열로 인식, 대소문자 구분없이 일치하는 'to'를 찾아 배열로 반환

// [a-f]는 a 부터 f 사이의 문자를 찾는 range 표현식, w+ 플래그는 해당 문자로 시작해서 whitespace가 나타날 때 가지의 단어를 반환, g 플래그가 없기 때문에 첫 번째 일치하는 값만 찾아 추가 정보와 함께 반환
// 대소문자 구분 없이 a 부터 f 사이의 알파벳으로 시작하는 첫번째 단어 정보를 반환
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));      // g 플래그가 있기 때문에 정규 표현식에 맞는 모든 단어들을 반환, 대소문자 구분 없이 a 부터 f 사이의 알파벳으로 시작하는 모든 단어를 배열로 반환