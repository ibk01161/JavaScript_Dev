// 함수 표현식
// 함수를 정의하면서 동시에 변수 greeting_expression에 바로 할당 (greeting_expression 변수에 함수 리터럴을 할당)
var greeting_expression = function(name) {
    console.log('Hi, ' + name);
}

// 함수 선언문
function greeting_declaration(name) {
    console.log('Hi, ' + name);
}

greeting_expression('Chloe');
greeting_declaration('Chloe');