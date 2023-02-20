// Set 객체의 크기 확인하기 (size)

const s = new Set();

// Set객체에 문자형, 숫자형, 배열, 객체, 함수인 값을 추가
s.add('one');
s.add(2);
s.add([1, 2, 3]);
s.add({a: 'A', b: 'B'});
s.add(function() {});

console.log(s);
console.log(s.size);                // size 메소드로 값의 개수를 확인
s.clear();                          // Set객체의 clear 메소드로 값을 초기화
console.log(s.size);