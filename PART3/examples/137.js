// 일정 시간마다 코드 실행하기 (setInterval)

let count = 0;

const timer = setInterval(() => {                           // setInterval 메소드를 실행하고, 반환되는 id값을 timer 변수에 대입
    console.log(`${count++} 번째 함수가 실행됨`);            // setInterval이 1000ms(1초)마다 콜백 함수를 실행, 그때마다 count 변수값이 1씩 증가
}, 1000);

/*
 * 별도 실행
*/
clearInterval(timer);                                       // timer 변수를 clearInterval 함수에 넣어 실행하면 콘솔 출력이 중단됨