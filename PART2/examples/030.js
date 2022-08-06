// 기존 028.js의 family 객체의 속성을 변수로 작성 (2~9)
// 각 속성의 '키 이름' 을 '변수명'으로 정의
var address = 'Seoul';
var members = {};
var addFamily = function(age, name, role) {
    this.members[role] = {age, name};
};
var getHeadCount = function() {
    return Object.keys(this.members).length;
}

// family 객체 리터럴 선언
// {변수명} 으로 정의한 객체는 {변수명 : 변수값} 으로 정의된 것과 동일
// 단축 속성명은 문자열, 객체, 함수 등 자료형에 상관없이 적용 가능
var family = {address, members, addFamily, getHeadCount}

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

console.log(family);
console.log(family.getHeadCount());