// 정수 확인하기 (isInteger)
console.log(Number.isInteger(0));
console.log(Number.isInteger(-1));
console.log(Number.isInteger(7777777777777777));
console.log(Number.isInteger(null));                        // null 은 정수가 아니기 때문에 false
console.log(Number.isInteger(0/0));                         // 수학적으로 정의하지 않는 산술 연산 결과는 false
console.log(Number.isInteger('Infinity'));                  // 양의 무한대, 음의 무한대 값은 정수가 아니므로 false
console.log(Number.isInteger(true));                        // boolean 값은 정수가 아니므로 false
console.log(Number.isInteger({}));                          // 객체 또한 정수가 아니므로 false