// 내부에 arguments 객체를 통해 전달된 인자의 합을 반환 하는 함수
// arguments 객체는 배열과 유사하게 인덱스를 통해 접근할 수 있지만, length 속성 외에는 배열의 어떠한 속성과 메소드를 가지고 있지 않음
// instanceof 연산자를 이용해 배열이 아닌것 확인!
function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++ ) {
        total += arguments[i];
    }
    console.log(arguments instanceof Array);
    return total;
}

// sum 함수는 매개변수를 정의하고 있지 않지만, 전달 인자로는 1,2,3 을 전달하고 있음 => 에러 발생X
var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testArg() {
    var newArr = Array.prototype.slice.call(arguments);     // arguments 객체를 배열로 바꾸기 위해 배열의 프로토타입에 정의된 slice 메소드 호출 => arguments 객체의 요소들을 복사하는 배열생성
    console.log(newArr);                           
    console.log(newArr.indexOf('b'));                       // 문자열 b의 인덱스 반환
    console.log(arguments.indexOf('b'));                    // arguments 객체는 배열이 아니기 때무에 에러 발생
}

testArg('a', 'b');