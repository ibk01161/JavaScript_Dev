// Set 객체의 값 추가/삭제/확인하기 (add, delete, has)

// Set 객체 생성자를 변수에 대입
const s = new Set();

// 값 추가
s.add('one');
s.add('two');
s.add('three');

console.log(s.has('one'));              // Set객체의 has 메소드를 통해 'one' 값이 있는지 확인, 값이 확인되면 true 반환
s.delete('one');                        // Set에서 'one' 값을 삭제
console.log(s.has('one'));
console.log(s.has('two'));