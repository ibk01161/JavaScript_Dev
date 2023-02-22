// 일정 시간 후에 코드 실행하기 (setTimeout)

const timer = {
    run: function() {                                                       // timer 객체 안에 run 속성 추가, run 속성값으로 함수를 대입
        if (this.t) console.log('이미 실행된 타이머가 있음');

        this.t = setTimeout(function() {                                    // 첫 번재 인자로 정의된 callback 함수가 실행됨
            console.log('1초 뒤에 실행됩니다.');                             // 1000ms(1초) 시간이 지나면 정의된 callback 함수를 통해 console.log 코드 실행
        }, 1000);                                                           // 추후 타이머 관리를 위해 작성한 setTimeout 코드를 time.t에 대입
    },
    cancel: function() {                                                    // timer 객체의 cancel 속성값으로 함수를 대입
        if (this.t) clearTimeout(this.t);                                   // this.t의 값이 유효한 상태에서만 clearTimeout을 실행함
        this.t = undefined;                                                 // clearTimeout 메소드는 setTimeout으로 미리 정의한 타이머 작업을 취소시킴
    }                                                                       // this.t로 기할당된 실행 계획이 취소됨, cancel 처리가 완료된 후 this.t에 초기값 undefined을 대입
};

timer.run();                                                                // run 함수 실행
timer.cancel();                                                             // 17라인으로 타이머를 실행했지만, 1초가 지나기 전 바로 timer 객체의 속성 cancel 함수를 실행하여 this.t 실행 계획이 취소됨, 이때 this.t느 실행되지 않음
timer.run();                                                                // 다시 run 함수 실행, 이때에는 clearTimeout이 실행되지 않기 때문에 1초 뒤에 log가 출력됨