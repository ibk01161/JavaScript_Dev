// 매개변수 x를 전달 받아 x + x 결과를 반환하는 화살표 함수 정의
const double = x => x + x;
console.log(double(2));

// a와 b 두 매개변수를 가지는 화살표 함수 정의 (괄호 사용)
const add = (a, b) => a + b;
console.log(add(1, 2));

// 매개변수를 정의하지 않았기 때문에 괄호로 빈 매개변수 표현
// 화살표 함수 코드 블록을 작성하고 내부에 arguments 객체를 콘솔에 출력
const printArguments = () => {
    console.log(arguments);
}
printArguments(1, 2, 3);            // 화살표 함수는 기본 함수와 다르게 arguments 객체가 만들어지지 않아 에러 발생

// 전달받은 인자들의 합을 구하는 화살표 함수 정의, arguments 객체 대신 나머지 연산자를 통하여 매개변수를 정의
// args는 전달받은 인자 목록을 배열로 사용할 수 있음
// 화살표 함수 코드 블록에 대괄호를 사용하였기 때문에 return 문을 작성하여 반환값을 명시
const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
console.log(sum(1, 2, 3));

// 화살표 함수 또한 함수의 인자로 전달 가능
// setTimeout 함수의 인자로 화살표 함ㅁ수가 전달되고, 매개변수가 없어 괄호를 작성해줌
setTimeout(() => {
    console.log('화살표 함수!');
}, 10);