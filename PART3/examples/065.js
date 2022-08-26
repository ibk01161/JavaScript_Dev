// 문자열을 숫자형 정수로 변환하기 (parseInt)
console.log(parseInt('15'));                        // 두 번재 인자가 없는 경우, 기본값인 10진수로 숫자를 변환
console.log(parseInt('15', 10));
console.log(parseInt('15', 2));                     // 문자 15를 2진수 숫자로 변환 => 1을 반환
// 실수인 숫자 또는 문자를 정수로 변환할 수 있음
console.log(parseInt(5.15));             
console.log(parseInt('5.15'));