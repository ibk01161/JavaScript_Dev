// 정규표현식으로 특정 문자의 포함 여부 확인하기 (test)

// '[' 와 ']' 로 둘러싼 표현식은 '선택패턴'임, 이 안에 넣은 문자 중 매칭되는 값을 확인, + 한정 기호는 표현식 패턴에 하나 이상 일치하는 모든 문자열을 확인
const numRegExp = /[0-9]+/;                                                             // 대입된 문자열이 숫자 0~9 중 하나라도 일치하는지 확인하는 표현식

// 중괄호 {}는 일반적으로 표현식에서 개수를 가리킬 때 사용, \d{3}은 '오직 숫자로 구성된 문자 3개'를 의미, \d{3,4}는 '오직 숫자로 구성된 문자가 3개 또는 4개'를 의미
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;

// 소괄호 ()는 그룹, 이 괄호는 공백으로 단어와 단어를 구분하는 역할과 유사, 표현식을 괄호 그룹으로 묶으면 원하는 부분끼리만 표현식이 적용됨
const emailRegExp = /^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;     // @ 기호 기준으로 왼쪽 정규표현식은 영문 대소문자, 숫자 그리고 필수값이 아닌 기호 -_.를 허용하는 표현식

console.log(numRegExp.test(12345));
console.log(numRegExp.test('test'));                        // 숫자가 포함되어 있지 않아 false 반환

console.log(phoneRegExp.test('010-1234-5678'));
console.log(phoneRegExp.test('02-1234-5678'));

console.log(emailRegExp.test('test123@javascript.org'));
console.log(emailRegExp.test('test-javascrpt'));