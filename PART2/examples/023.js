// AND 논리 연산자 '&&'
console.log(true && true);
console.log(true && false);
console.log('문장' == '문장' && 5 == 5);
console.log('다른 문장1' == '다른 문장2' && 5 == 5);

console.log('\n');

// OR 논리 연산자 '||'
console.log(true || false);
console.log(false || false);
console.log('문장' == '문장' || 5 == 10);

console.log('\n');

// NOT 논리 연산자 '!'
console.log(!true);
console.log(!false);
console.log(!5);            // 항상 true값
console.log(!'문장');       // 항상 true값
console.log(!!5);
console.log(!!'문장');
