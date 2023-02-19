// Map 객체 요소 나열하기 (keys, values, entries)

const map = new Map();

// 요소 추가
map.set('one', 1);
map.set('two', 2);
map.set('three', 3);

const keys = map.keys();                // 'keys() 함수'를 호출해 '키 정보'들을 모아 MapIterator 객체로 반환함, MapIterator {'one', 'two', 'three'}를 변수 keys에 할당함
const values = map.values();            // 'values() 함수'를 호출해 '값 정보'들을 모아 MapIterator 객체로 반환함, MapIterator {1, 2, 3}를 변수 values에 할당함
const entries = map.entries();          // 'entries() 함수'를 호출해 '[키, 값] 형태의 정보'들을 모아 MapIterator 객체로 반환함, MapIterator {['one', 1], ['two', 2], ['three', 3]}를 변수 entries에 할당함

// iterator의 next() 함수를 통해 첫 번째 요소가 반환됨, 첫 번째 요소가 반환되고, value 속성을 호출하여 각각 'one', 1, ['one',1] 값이 출력됨
console.log(keys.next().value);
console.log(values.next().value);
console.log(entries.next().value);

// next()로 반환된 요소를 제외하고, 남은 요소들을 확인할 수 있음
console.log(keys);
console.log(values);
console.log(entries);