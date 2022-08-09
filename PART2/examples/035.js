function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값!');
}

checkNumber(100);
checkNumber('Wrong type');
console.log('완료!');               // line 7 에서 에러가 발생했으므로 코드 실행이 중단 (실행X)