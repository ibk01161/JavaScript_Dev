// class 키워드를 이용해서 Cart 클래스 정의, 관례상 클래스 이름의 첫 글자는 대문자로 작성
// 클래스를 정의할 때 클래스 명 이후로 중괄호가 오고 그 안을 클래스 몸통(Body) 라고 부름
class Cart {
    // 클래스 몸통에는 생성자 함수를 작성할 수 있음, 생성자는 new 키워드를 통해객체가 생성될 때 호출, 여기서는 store 속성에 빈 객체를 추가
    // 생성자 함수에서는 매개변수에서 전달받은 값을 속성으로 추가하거나, 속성의 초기값을 대입하는 초기화 과정을 주로 함
    constructor() {
        this.store = {};
    }

    // 메소드 정의1
    addProduct(product) {
        this.store[product.id] = product;
    }

    // 메소드 정의2
    getProduct(id) {
        return this.store[id];
    }
}

// Cart 클래스를 new 키워드를 사용하여 객체 생성
// 이렇게 만들어진 인스턴스를 cart1 변수에 할당, const를 통해 정의했기 때문에 cart1 에는 다른 값을 대입할 수 없음
const cart1 = new Cart();

cart1.addProduct({id: 1, name: '노트북'});
console.log(cart1.store);

const p = cart1.getProduct(1);
console.log(p);