const num = 5;
const bool = true;
const str = "문자열 값";
const arr = [1, 2, 3];
const obj = {a: 15};

console.log(num.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());

// 변수 중에 num 변수의 __proto__를 통해 toString 메소드를 직접 재정의, 새로 정의한 함수는 고정된 문자열을 반환
num.__proto__.toString = () => {
    return 'toString 덮어쓰기';
};

console.log('\n');
console.log(num.toString());            // 14라인에서 재정의한 toString이 호출