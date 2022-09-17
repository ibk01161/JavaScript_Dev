// 정규표현식으로 문자열 변환하기 (exec)

const str = 'Java is not in Javascript';

const result1 = /java/ig.exec(str);         // 대소문자 구분 없이 java문자를 찾는 정규표현식, 변수 str에서 맨 처음 'Java'값 정보가 반환됨
console.log(result1[0]);                    // result1 배열에는 표현식과 일치한 값이 할당 되어있음
console.log(result1.index);                 // 'Java' 가 발견된 시작 인덱스 => 숫자 0
console.log(result1.input);                 // input 속성은 exec 메소드 인자값인 원본 문자열 => 변수 str 값

const nums = `"1", "2", "3"`;
const regex = /\d+/g;                       // 숫자만 찾는 정규표현식

// match 메소드와 exec 메소드의 가장 큰 차이점은 반환값에 있음
// exec 메소드는 호출할 때 마다 일치하는 값을 찾으면, 현재 위치를 가리키는 lastIndex 인덱스 값이 계속 업데이트 됨
// nums 변수에 정규표현식과 일치한 값이 모두 반환될 때까지 반복문 실행, exec 메소드로 반환된 값은 result2 에 대입

// 변수 nums에서 정규표현식으로 일치하는 값은 모두 1, 2, 3 세 개
// exec 메소드를 호출될 때마다 당시 일치한 값의 마지막 lastIndex 값을 반환하기 때문에 1, 2, 3 숫자가 발견된 마지막 인덱스 2, 7, 12 가 반환됨
while (result2 = regex.exec(nums)) {        
    console.log(result2, regex.lastIndex);
}