// 문자열 순환하기(for-of)

const str = "hello";

for (const item of str) {
    console.log(item);              // 문자열을 for...of 문을 통해 각 문자를 콘솔로 출력
}

// String 객체는 반복 가능한 객체이기 때문에 Symbol.iterator 메소드를 가지고 있음
// Symbol.iterator 메소드를 호출하면 반복자가 반환됨, 이 반복자의 next 메소드를 호출하면서 반환된 value 값이 콘솔로 출력됨
const iter = str[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());