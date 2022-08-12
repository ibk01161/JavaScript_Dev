let user = {
    name: "jeado"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');     // '속성 기술자' 를 가져오는 메소드
console.log(descriptor);

let user2 = {};
// 해당 객체의 속성 정의, 첫번재 인자는 속성을 정의할 '객체', 두번째 '속성명', 세번째 '속성 기술자'
Object.defineProperty(user2, "name", {
    value: "jeado",
    enumerable: true,
    configurable: true,
    writable: false
});
console.log(user2.name);
user2.name = 'bbo';                 // writable이 false이기 때문에 값을 재할당해도 값이 바뀌지 않음
console.log(user2.name);

let user3 = {
    name: "jeado",
    toString() {
        return this.name;
    }
};
Object.defineProperty(user3, "toString", {
    enumerable: false
});

for (let key in user3) {
    console.log(key);           // enumerable을 false로 정의했기 때문에 for...in 루프로 모든 속성에 접근하여 속성 이름을 콘솔에 출력되지 않음
}

let user4 = {};
Object.defineProperty(user4, "name", {
    value: "jeado",
    configurable: false
});
delete user4.name;
console.log(user4);
Object.defineProperty(user4, "name", {          // 새롭게 name 속성을 속성 기술자로 재정의하려면 configuable이 false 이기 때문에 에러발생
    writable: true
});
