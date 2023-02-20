// Set 객체 값 나열하기 (keys, values, entries)

// Set 객체 생성자를 변수 s에 할당
const s = new Set();

// 값 추가
s.add('one');
s.add('two');
s.add('three');

const keys = s.keys();                          // Set 객체는 값의 집합이기 때문에, 키(Key)를 모으는 것은 의미 X, Set객체는 keys 메소드와 values 메소드의 동작 방식을 동일하게 처리
const values = s.values();                      // values 메소드를 호출하면 Set 객체의 값을 모아 SetIterator 객체로 반환, 즉 SetIterator {'one', 'two', 'three'} 이 반환됨
const entries = s.entries();                    // Set 객체는 값만 처리하기 때문에, 키 대신 값을 전달함, SetIterator {['one', 'one'], ['two', 'two'], ['three', 'three']} 이 변수 entries에 할당됨

// next() 함수를 통해 첫 번째 요소가 반환됨
console.log(keys.next().value);
console.log(values.next().value);
console.log(entries.next().value);

// next()로 반환된 요소를 제외하고, 남은 요소들을 확인
console.log(keys);
console.log(values);
console.log(entries);