console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('Is it Number?'));
console.log(Number.isNaN(0));
console.log(Number.isNaN(null));

console.log('\n');

console.log(Number.isNaN(-1));                                  // 음수는 숫자 자료형, NaN이 아니기 때문에 false 반환
console.log(Number.isNaN(0/0));                                 // 0을 0으로 나누는 것은 수학적으로 정의되지 않는 연산, 결과값이 NaN 이기 때문에 true
console.log(Number.isNaN(new Date()));                          // new Date()가 실행되면 결과값은 현재 시간이 long형으로 변환, NaN이 아닌 숫자형이기 때문에 false
console.log(Number.isNaN(new Date().toString));                 // 현재 시간을 long형으로 변환하지만 toString()을 통해 문자형으로 변환, 문자열은 NaN이 아니기 때문에 false
console.log(Number.isNaN('Infinity'));                          // 자바스크립트에서 'Infinity' 는 무한대, NaN이 아닌 숫자형으로 구분되어 false