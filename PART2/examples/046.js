// 046. Get, Set 을 통합 속성 접근 관리하기
let user = {};
// user 객체의 age 속성을 정의
// 이때 값에 접근하는 방식을 정의하는 개체를 전달하는데 이 객체를 '접근 기술자(Accessor Descriptor)' 라고 함, get과 set을 메소드로 가짐
// age의 속성의 접근 기술자의 get메소드는 속성에 접근할 때 호출
// set메소드는 속성에 값을 대입할 때 호출
Object.defineProperty(user, "age", {
    get: function() {
        return this._age;
    },
    set: function (age) {
        if (age < 0) {
            console.error('0보다 작은값은 올 수 없음');
        } else {
            this._age = age;
        }
    },
    enumerable: true

});
user.age = 10;                  // age 속성 접근 기술자의 set 메소드가 호출, user 객체의 _age 속성에 값 10이 할당
console.log(user.age);          // get 메소드 호출
user.age = -1;                  // set 메소드 호출

let user2 = {
    get name() {
        return this._name;
    },
    set name(val) {
        if (val.length < 3) {
            throw new Error('3자 이상이어야 함');
        }
        this._name = val;
    }
}
user2.name = 'harin';
console.log(user2.name);
user2.name = 'ha';

// * 속성 이름에 _를 붙이는 것은 암묵적으로 비공개(Private) 속성임을 나타냄
//   자바스크립트 객체는 속성 접근 제한자가 없어 모든 속성은 공개(Public) 임
//   그래서 대체로 이름 규칙을 통해 비공개임을 나타냄