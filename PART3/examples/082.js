// 배열 앞에 요소 추가하기 (unshift)
const festa = ['mang'];

// unshift 메소드를 활용하여 순서대로 festa 배열 앞에 요소를 추가
festa.unshift('chimmy');
festa.unshift('tata');
festa.unshift('cooky');
festa.unshift('shooky');
festa.unshift('koya');
festa.unshift('rj');

festa.forEach(name => {
   console.log(name);
});