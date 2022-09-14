// 정규표현식으로 대응되는 문자열 위치 확인하기 (search)

const str = 'To lose your path is the way to find that path';

// 정규표현식은 특수기호 / 를 양쪽에 두고, 그 안에 원하는 문자열의 패턴 또는 문자를 넣음
const regex1 = /path/;                  // path 문자를 찾는 /path/를 변수에 대입
const regex2 = /q/;                     // 소문자 q를 찾음
const regex3 = /t/g;                    // 특수기호 /가 끝나는 지점에 g 플래그를 추가, G플래그를 추가하면 정규표현식은 대상 문자열 전체에서 일치하는 모든 문자를 찾음 => 모든 소문자 t를 가리킴
const regex4 = /t/ig;                   // i 플래그를 추가하면 대소문자 구별없이 문자열을 찾음 => T 또는 t 문자를 찾는 표현식

console.log(str.search(regex1));        // 문자열 str에서 인덱스 13번째에 해당 문자가 위치하고 있기 때문에, 숫자 13을 반환
console.log(str.search(regex2));        // str 문자열에서 소문자 q를 찾을 수 없기 때문에 숫자 -1 반환
console.log(str.search(regex3));        // search 메소드 특성 상, 일치한 문자들 중 가장 첫 번째 인덱스 값만 찾기 때문에 숫자 15 반환
console.log(str.search(regex4));