// 현재 시간을 원하는 포맷으로 출력하기 (getFullYear / getMonth / getDate)

// Date 객체 prototype으로 yyyymmdd 이름의 메소드를 정의
Date.prototype.yyyymmdd = function() {
    const yyyy = this.getFullYear();                                                        // 함수 내 this는 Date 객체를 가리킴, 4자리 연도 값을 반환
    const mm = this.getMonth() < 9 ? `0${this.getMonth() + 1}` : this.getMonth() + 1;       // 두 자리를 맞추기 위해, 값이 한자리인경우 0을 추가
    const dd = this.getDate() < 10 ? `0${this.getDate()}` : this.getDate();
    
    return '' + yyyy + mm + dd;
}

const date = new Date();            // new Date()는 현재 기준의 날짜 정보가 들어 있는 Date 객체 인스턴스를 생성, date는 Date.prototype을 상속받은 Date 객체 인스턴스
console.log(date.yyyymmdd());