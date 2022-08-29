// 특정 위치의 문자 반환하기 (charAt)
const str = 'Good afternoon, Good evening, and Good night! ' + ` - The Truman Show, 1998`;

console.log(str.charAt(0));
console.log(str.charAt(5));
console.log(str.charAt(14));
console.log(str.length);
console.log(str.charAt(500));           // 인덱스 500이 가르키는 위치는 유효하지 않기 때문에 빈 값 출력