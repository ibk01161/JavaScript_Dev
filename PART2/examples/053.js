class Product {
    // static 키워드를 사용해 build 정적 메소드 정의 (난수를 id로 하는 상품 인스턴스 반환)
    static build(name, price) {
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }

    // 세금을 계산하여 반환하는 정적 메소드
    static getTaxPrice(Product) {
        return (product.price * 0.1) + product.price;
    }

    // 상품 클래스의 생성자 함수를 정의
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class DeposableProduct extends Product {
    depose() {
        this.deposed = true;
    }
}

const gum = Product.build('껌', 1000);
console.log(gum);

const clothes = new DeposableProduct(1, '옷', 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);