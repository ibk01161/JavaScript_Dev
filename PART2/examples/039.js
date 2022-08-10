var a = 10;
console.log(a);

// 함수 스코프
function print() {
    var b = 20;
    if (true) {
        var c = 30;
    }

    console.log(c);
}

print();
console.log(b);             // print 함수 안에서만 접근 가능