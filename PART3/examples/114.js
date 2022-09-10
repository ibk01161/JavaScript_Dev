// UTC 기준 날짜 출력하기 (Date.UTC)
const date = new Date();

const dateUTC = Date.UTC(                                               // Date 객체의 메소드 UTC는 매개변수로 지정된 날짜, 시간을 UTC 기준의 밀리초 시간으로 반환
    date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
);
// Date.UTC 메소드에 6개 인자 대입
// getUTCFullYear 메소드는 국제 표준시 기준(UTC) 으로 계산된 연도 정보를 가져옴
// 변수 date 날짜/시간 값의 UTC 기준 연도 정보가 반환

console.log(new Date(dateUTC));