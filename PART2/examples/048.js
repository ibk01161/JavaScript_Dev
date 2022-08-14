// 제이 선생을 객체로 표현, 이름과 나이를 속성으로 가지고 있고 자바스크립트를 가르치는 행위를 함
// teachJavascript 메소드는 학생을 매개변수로 정의하고 있음, teacherJay 객체는 student 객체를 사용함
// 객체지향에서는 객체들이 서로 의사소통을 하게 되는데, 메소드를 통해 서로 메시지를 전달함, 그리고 객체지향에서는 협력하지 않는 객체란 존재하지 않음, 협력은 메시지 전달을 통해 이루어짐
const teacherJay = {
    name: '제이',
    age: 30,
    teachJavascript: function(student) {
        student.gainExp();
    }
}

// 뽀 학생을 객체로 표현, 이름과 나이 그리고 경험치를 상태로 가지고 있음, 경험치를 얻는 행위를 함
// 이 행위를 통해 내부 상태인 경험치를 변경시킬 수 있음
const studentBbo = {
    name: '뽀',
    age: 20,
    exp: 0,
    gainExp: function() {
        this.exp++;
    }
}

console.log(studentBbo.exp);
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp);