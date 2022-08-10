// 함수 호이스팅
hello();
function hello() {
    console.log('Hi~');
}

// 함수 표현식을 통해 변수에 할당하여 호출해보면 에러가 발생함
hello2();
var hello2 = function() {
    console.log('Hi~');
}