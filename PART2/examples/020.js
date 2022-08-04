var cart = [
    {name : '옷', price : 2000},
    {name : '가방', price : 1000}
];

// 템플릿 문자열은 `(억음 부호)로 작성
// 템플릿 문자열을 이용하면 ${표현식}를 이용하여 삽입 처리 (interpolation) 가 가능
// 템플릿 문자열은 기존 문자열과 다르게 멀티 라인이 가능
var numOfItems = `카트에 ${cart.length} 개의 아이템이 있습니다.`;
var cartTable = 
`<ul>
    <li>품목 : ${cart[0].name}, 가격 : ${cart[0].price}</li>
    <li>품목 : ${cart[1].name}, 가격 : ${cart[1].price}</li>
</ul>`;

console.log(numOfItems);
console.log(cartTable + '\n');


var personName = 'harin';
var helloString = 'hello ' + personName;
var helloTemplateString = `hello ${personName}`;

console.log(helloString);
console.log(helloTemplateString + '\n');

console.log(helloString === helloTemplateString);
console.log(typeof helloTemplateString);