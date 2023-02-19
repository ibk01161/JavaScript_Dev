// Map 객체에 요소 추가/삭제/확인하기 (set, get, delete, has)

const map = new Map();                          // Map 객체 생성자를 변수에 대입

map.set('one', 1);                              // set 메소드를 통해 요소를 추가함
map.set('two', 2);

console.log(map);

console.log(map.get('one'));                    // 키(Key)가 'one'인 요소 값을 가져옴, get메소드에 키 정보를 넣으면 해당 키에 대한 요소 값을 반환함
console.log(map.has('one'));                    // 키(Key)가 'one'인 요소를 확인함, has속성을 통해 해당 키 정보가 있는지 확인, 있으면 true, 없으면 false 반환
map.delete('one');                              // 키(Key)가 'one'인 요소를 삭제함

console.log(map.has('one'));
console.log(map.has('two'));