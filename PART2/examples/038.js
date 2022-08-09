// 나머지 매개변수로 정의
// 나머지 매개변수인 args는 배열이기 때문에 [인덱스]를 통해 접근이 가능하고 indexOf와 같은 메소드를 사용할 수 있음
function sum(...args) {
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(args.indexOf(1));
    return total;
}

console.log(sum(1, 2, 3));

function sum2(a, b, ...others) {
    var total = a+ b;
    for (var i = 0; i <others.length; i++) {
        total += others[i];
    }
    return total;
}

console.log(sum2(1, 2));                    // sum2 함수에 others 는 빈 배열
console.log(sum2(1, 2, 3, 4));              // sum2 함수 호출 시 더 많은 인자가 전달되기 때문에 3, 4는 others 나머지 매개변수의 배열의 요소로 전달됨