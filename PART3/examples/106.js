// 객체 병합 확장하기 (assign)

const obj1 = {one: 1, two: 2, three: 3};
const obj2 = {name: '탄이', age: 5, address: 'Seoul'};
const obj3 = {friends: ['혜림', '현아', '현일', '우림']};

const newObj1 = Object.assign({}, obj1);                    // 첫 번째 인자에 빈 객체를 대입, assign 메소드에 두 번째 인자로 대입한 객체 obj1은 빈 객체와 병합되어 반환
const newObj2=  Object.assign({}, obj1, obj2);              // 빈 객체에 obj1과 obj2 객체를 병합
newObj1.four = 4;                                           // 원본 객체에 변경된 내용을 확인하기 위해, newObj1 객체에만 새로운 속성 추가

console.log(obj1);                                          // obj1 객체의 원본 출력, newObj1은 빈 객체를 기준으로 벼압되었기 때문에 obj1의 복사본 객체라고 볼 수 있음
console.log(newObj1);
console.log(newObj2);

console.log('\n');

const newObj3 = Object.assign(obj1, obj3);                  // obj1 객체 기준으로 obj3이 병합됨, 기존 obj1 원본 객체에 직접 obj3 객체 속성이 추가됨

console.log(obj1);
console.log(newObj1);                                       // obj1 원본 객체가 추가 수정되어도, 빈 객체에 병합된 객체에는 영향을 주지않음
console.log(newObj2);
console.log(newObj3);