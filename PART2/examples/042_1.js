const CONST_USER = {name: 'jay', age: 30};
console.log(CONST_USER.name, CONST_USER.age);

// CONST_USER는 불변 객체가 아니라서 name속성에 다른 값을 할당할 수 있음
// 객체의 내부 상태가 변경 가능하기 때문에 const로 배열을 선언하여도 새로운 요소를 추가하거나 변경할 수 있음
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);

// const로 정의되었기 때문에 재할당만 되지 않음
// => 새로운 객체로 할당은 못하고 객체 내부의 상태만 변경 가능함
CONST_USER = {name: 'bbo'};