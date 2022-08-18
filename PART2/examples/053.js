class Product {
    // static 키워드를 사용해 build 정적 메소드 정의 (난수를 id로 하는 상품 인스턴스 반환)
    static build(name, price) {
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }

    // 세금을 계산하여 반환하는 정적 메소드
    static getTaxPrice(product) {
        return (product.price * 0.1) + product.price;
    }

    // 상품 클래스의 생성자 함수를 정의
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// 폐기가 가능한 상품 클래스 정의
// 생성자 함수의 prototype 기반 상속과는 다르게 클래스로 상속을 하게 되면 '정적 메소드 또한 상속' 하게 됨
class DeposableProduct extends Product {
    depose() {
        this.deposed = true;
    }
}

const gum = Product.build('껌', 1000);
console.log(gum);

// DeposableProduct 인스턴스 생성, Product 클래스를 상속했기 때문에 getTaxPrice 메소드 호출 가능
const clothes = new DeposableProduct(1, '옷', 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);