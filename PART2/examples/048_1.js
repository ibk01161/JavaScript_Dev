// 학생의 경험치를 얻는 행위를 gainExp 메소드로 작성한 원형(prototype) 객체를 정의
const studentProto = {
    gainExp: function() {
        this.exp++;
    }
}

const harin = {
    name: '하린',
    age: 10,
    exp: 0,
    __proto__: studentProto             // __proto__ 속성으로 원형 객체를 정의할 수 있음, __proto__ 속성에 studentProto 객체를 연결했기 때문에 경험치를 엉ㄷ는 행위가 가능하게 됨
};

const bbo = {
    name: '뽀',
    age: 20,
    exp: 10,
    __proto__:  studentProto
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin);
console.log(bbo);

// 두 객체 모두 경험치를 얻는 행위를 할 수 있음 => 모두 같은 원형 객체에 연결되어 있기 때문
// 두 객체는 학생 타입이라 할 수 있음