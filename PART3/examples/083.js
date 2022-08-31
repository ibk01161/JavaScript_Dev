// 배열 길이 구하기 (length)
const ship = {                                                                      // 객체 리터럴이 할당된 변수 선언
    max: 4,                                                                         // 배의 정원 수
    passengers: [],                                                                 // 빈 배열 정의, 탑승객 리스트
    onBoard: function(name) {
        if (this.passengers.length === 4) {                                         // 배열의 길이가 4
            console.log(`This ship si full. ${name} can not board this ship.`);
        } else {
            this.passengers.push(name);
            console.log(`${name} boarded.`);
        }
    }
}

ship.onBoard('chloe');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');

console.log(ship.passengers);