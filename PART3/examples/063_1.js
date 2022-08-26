function verifyInteger(n) {
    if (!Number.isInteger(n)) return 0;
    return n;
}

const num1 = verifyInteger(15);
const num2 = verifyInteger(Infinity);                   // Integer의 byte 크기를 뛰어넘는 큰 수 => 0
const num3 = verifyInteger(0.05);                       // 실수형 값이기 때문에 0

console.log(num1, num2, num3);