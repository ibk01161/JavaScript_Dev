// 일정 시간 후에 코드 실행하기2 (setTimeout 비동기 특징)

setTimeout(() => {
    console.log('JavaScript');
}, 0);

console.log('200제');

// setTImeout이 아무리 지연 시간이 0이어도, '200제' 로그 다음으로 실행 스택에 쌓임
// '200제' 로그가 먼저 출력되고 그 다음에 'JavaScript' 문자열이 콘솔 출력됨