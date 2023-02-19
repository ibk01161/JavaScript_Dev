// Map 객체 순환하기 1 (for-of, foreach)

const map = new Map();

map.set('one', 1);
map.set('two', 2);

console.log('키 정보만 출력함');
for (let key of map.keys()) {
    console.log(key);                                   // for-of 를 통해 Iterator를 순회할 수 있음, key()로 반환된 Iterator 객체를 순회하ㅏ여 변수 map의 키 정보들이 콘솔 출력됨
}

console.log('값 정보만 출력함');
for (let value of map.values()) {
    console.log(value);
}

// 키, 값 정보를 동시에 반환하여 순회하는 방법
// 1. for...of에서 map.entries()함수를 활용
// 2. forEach도 키, 값 정보가 하나씩 전달되어 순회할 수 있음
console.log('[for...of, entries] 키,값 정보를 동시에 출력');
for (let [key, value] of map.entries()) {
    console.log(`키는 ${key}, 값은 ${value} 입니다.`);
}

console.log('[for...of] 키,값 정보를 동시에 출력');
for (let [key, value] of map) {
    console.log(`키는 ${key}, 값은 ${value} 입니다.`);
}

console.log('[foreach] 키,값 정보를 동시에 출력')
map.forEach((value, key) => {
    console.log(`키는 ${key}, 값은 ${value} 입니다.`);
});