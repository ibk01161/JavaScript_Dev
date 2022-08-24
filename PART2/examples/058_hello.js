export const version = 'v1.0';                  // const 키워드 version 이름으로 상수 정의, export 키워드로 정의된 상수의 이름인 version 으로 내보냄

// personA 이름으로 정의된 변수에 객체를 할당, 이 변수 또한 personA 이름으로 내보냄
export var personA = {
    name: 'a'
};

// add 함수를 선언하고 선언된 함수의 이름으로 내보냄
export function add(a, b) {
    return a + b;
}

// Person 클래스를 선언하고 선언된 함수의 이름으로 내보냄
export class Person {
    constructor(name) {
        this.name = name;
    }
}