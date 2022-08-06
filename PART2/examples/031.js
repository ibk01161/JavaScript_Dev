// obj 객체에 속성 추가
var obj = {};

for (var i = 0; i < 4; i++) {
    obj['key' + i] = i;
}

console.log(obj);

// 속성 계산명으 활용해 객체 정의
var profile = 'chloe:30';

var person = {
    [profile] : true,
    [profile.split(':')[0]] : profile.split(':')[1]
};
console.log(person);