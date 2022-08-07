// 객체 비구조화 할당 - 중괄호 {} 안에 속성 이름을 넣어 객체의 여러 속성을 한 번에 가져올 수 있음
var obj = {a : 1, b : 2, c : 30, d : 44, e : 55};

var {a, c} = obj;
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

console.log('\n');

var {a : newA=10, f : newF=5} = obj;            // a:newA=10 은 객체의 a 속성값을 새로운 변수 newA로 다시 할당하되, undefined로 값이 없는 경우에는 기본값 10을 할당한다는 뜻
console.log(`newA >>> ${newA}`);
console.log(`newF >>> ${newF}`);

console.log('\n');

// 배열 비구조화 할당 - 대괄호 [] 안에 속성 이름을 넣어 객체의 여러 속성을 한 번에 가져올 수 있음
var arr = [1, 2, 30, 44, 5];

var [b, c, ...rest] = arr;
console.log(`0) b >>> ${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);

console.log('\n');

var [a=10, f=9] = [1];
console.log(`1) a >>> ${a}`);
console.log(`1) f >>> ${f}`);

console.log('\n');

[a, f] = [f, a];
console.log(`2) a >>> ${a}`);
console.log(`2) f >>> ${f}`);

console.log('\n');

function getArr() {
    return [1, 2, 3, 4, 5, 6];
}
[a, , , , , f] = getArr();
console.log(`3) a >>> ${a}`);
console.log(`3) f >>> ${f}`);
