// Set 객체 순환하기 (for-of, foreach)

const s = new Set();

s.add('one');
s.add('two');

// keys, values, entries 메소드는 SetIterator 객체를 반환, 즉, 반복 가능한 객체이므로 for...of 를 통해 각 메소드를 결과값을 순환함
console.log('키 정보만 출력');
for (let key of s.keys()) {
    console.log(key);
}

console.log('값 정보만 출력');
for (let value of s.values()) {
    console.log(value);
}

console.log('[for..of, entries] 키, 값 정보를 동시에 출력');
for (let [key, value] of s.entries()) {
    console.log(`키는 ${key}, 값은 ${value} 임`);
}

// forEach로 Set 객체를 순환
console.log('[forEach] 키, 값 정보를 동시에 출력');
s.forEach((value, key) => {
    console.log(`키는 ${key}, 값은 ${value} 임`);
})