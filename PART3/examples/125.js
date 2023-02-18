// 배열 순환하기(for-of)

const products = [{name: "가방"}, {name: "노트북"}];

for (const item of products) {
    console.log(item.name);                                 // 상품 객체 배열을 for...of문을 사용하여 각 객체의 name 속성 값을 콘솔로 출력
}

const iter = products[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());