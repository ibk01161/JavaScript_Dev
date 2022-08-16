// Storage 생성자 함수 정의, 내부 속성으로 dataStore를 가지고 빈 객체를 할당
function Storage() {
    this.dataStore = {};
}
// 생성자 함수의 프로토타입 객체에 put 메소드를 추가
// put 메소드는 주어진 키에 해당하는 값을 dataStore 속성에 할당
Storage.prototype.put = function(key, data) {
    this.dataStore[key] = data;
}
// 생성자 함수의 프로토타입 개체에 getData 메소드 추가
// getData 메소드는 매개변수의 값을 키로 해서 dataStore 속성에서 찾아 반환
Storage.prototype.getData = function(key) {
    return this.dataStore[key];
}

// Storage 타입의 인스턴스를 생성하면 인스턴스는 해당 생성자 함수의 프로토타입을 상속
// Storage 생성자 함수의 프로토타입에 정의된 메소드들을 해당 인스턴스는 사용가능
const productStorage = new Storage();
productStorage.put('id001', {name: '키보드', price: 2000});
console.log(productStorage.getData('id001'));

// RemovableStorage 생성자 함수 정의, Storage 함수를 호출하면서 this를 전달
// 이렇게 되면 Storage 생성자 함수가 호출 되면서 RemovableStorage 생성자 함수의 this 에 Storage 생성자 함수에서 정의한 대로 dataStore가 속성으로 추가됨
function RemovableStorage() {
    Storage.call(this);
}
// Object.create 메소드는 주어진 인자를 __proto__ 에 연결한 새로운 객체를 반환, 간단히 상속 관계를 형성할 수 있음
// RemovableStorage.prototype에 Object.create(Storage.prototype)를 할당하면 Storage 함수의 프로토타입 객체가 RemovableStorage함수의 프로토타입 객체의 __proto__에 할당
// 그러면 두 프로토타입이 상속 관계를 형성하게 됨
RemovableStorage.prototype = Object.create(Storage.prototype);
RemovableStorage.prototype.removeAll = function() {
    this.dataStore = {};
}
const productStorage2 = new RemovableStorage();
productStorage2.put('id001', {name: '키보드', price: 2000});
productStorage2.removeAll();

const item2 = productStorage2.getData('id001');
console.log(item2);