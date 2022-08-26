// 실수형 숫자로 변환하기 (parseFloat)
console.log(parseFloat(5.55));                                  // 소수점 있는 실수이기 때문에 그대로 반환
console.log(parseFloat('5.55'));                                // 문자 5.55 를 넣으면 소수점이 있는 숫자형으로 변환하여 반환
console.log(parseFloat('5.55 숫자의 결과값'));                   // 문자 5.55 이외 다른 문자 또는 공백은 생략되어 숫자 5.55 만 반환