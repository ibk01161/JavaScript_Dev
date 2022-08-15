// Teacher 생성자 함수 정의
// 전달받은 매개변수들의 값을 this의 속성으로 대입, 그리고 teach 메소드를 정의
function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
        console.log(student + '에게 ' + this.subject +  '를 가르침');
    };
}

// new 키워드와 함께 생성자 함수를 호출하면 생성자 함수 블록이 실행되고 별도의 return 문이 없어도 새로운 객체가 반환
// 이때 반환되는 새로운 객체를 가리키는 것이 this임, 그래서 jay 변수에 반환된 객체가 할당됨
const jay = new Teacher('jay', 30, 'JavaScript');
console.log(jay);                                   // Teacher 타입의 객체를 콘솔에 출력
jay.teach('bbo');                                   // 해당 객체의 teach 메소드 호출

console.log(jay.constructor);                       // 모든 객체는 constructor 속성을 가짐, 이 속성은 객체를 만든 생성자 함수를 가리킴
console.log(jay instanceof Teacher);

// new 키워드를 배고 Teacher 생성자 호출 => 새로운 객체가 반환되지 않아 undefined 출력
const jay2 = Teacher('jay', 30, 'JavaScript');
console.log(jay2);
console.log(age);