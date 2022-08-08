// 심볼형
// 심볼(Symbol)은 함수 호출을 통해 생성 가능 (new 키워드를 통한 호출을 할 경우 에러)
// Symbol을 함수 호출 시 값을 전달할 수 있는데 이 값은 디버깅 용도이며 고유한 Symbol값은 만들어지지 않음
// Symbol()은 늘 고유한 값을 반환
const symbol = Symbol();
const hello = Symbol('hello');

console.log(Number(3) === Number(3));
console.log(Symbol('symbol') === Symbol('sybmol'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

console.log('\n');

// 심볼은 객체의 키로 사용 가능
// Symbol에 대한 레퍼런스를 변수에 담고 있다가 접근할 때마다 사용
const nationility = Symbol('nationility');
const user = {
    name: 'jay'
};
user[nationility] = 'korean';
console.log(user);
console.log(user[nationility]);

console.log('\n');

// 심볼이 객체의 키로 사용되면 for-in 루프를 통해 심볼 키를 가져올 수 없음
// Object의 키를 반환하는 메소드를 사용해도 가져올 수 없고, JSON 문자열로 만들 때에도 해당 키는 빠지게 됨
for (let key in user) {
    console.log("key : " + key);
}
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

console.log('\n');

// getOwnPropertySymbols 메소드로 해당 객체의 키에 해당하는 심볼들을 가져올 수 있음
const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);
