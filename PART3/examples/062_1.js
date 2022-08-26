// NaN 여부를 검증하여 모든 값이 정상 숫자임을 확인한 후 안전하게 산술 연산
function verifyNumber(n) {
    if (!n || Number.isNaN(n)) {                        // 빈 값이거나 NaN이면 산술처리 불가한 값으로 인식, 0으로 리턴하며 함수를 빠져나옴
        return 0;
    }
    return n;
}

const num1 = verifyNumber(15);                      // 15
const num2 = verifyNumber(undefined);               // 0
const num3 = verifyNumber(null);                    // 0
const num4 = verifyNumber(NaN);                     // 0

console.log(num1 + num2 + num3 + num4);