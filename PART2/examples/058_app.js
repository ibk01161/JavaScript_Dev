import {add, Person, version} from './058_hello.js';        // 058_hello.js 에서 내보낸 이름으로 가져옴, 여기서 여러 이름들을 콤마로 구분하고 {}를 안에 나열함

// 가져온 add 함수와 Person 클래스를 사용
const result = add(1, 2);
const harin = new Person('하린');

console.log(result);
console.log(harin.name);
console.log(version);