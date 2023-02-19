// Map 객체의 크기 확인하기 (size)

const map = new Map();

// Map 속성 추가
map.set('one', 1);                                      // 문자형 값을 키(Key) 로 정의
map.set(2, 'two');                                      // 숫자형 값을 키(Key) 로 정의
map.set([1, 2, 3], 'Three elements');                   // 배열 값을 키(Key) 로 정의
map.set({a: 'A', b: 'B'}, 'object element');            // 객체 값을 키(Key) 로 정의
map.set(function() {}, 'function element');             // 함수인 값을 키(Key) 로 정의

console.log(map);
console.log(map.size);                                  // size 속성으로 변수 map 요소 개수를 확인할 수 있음