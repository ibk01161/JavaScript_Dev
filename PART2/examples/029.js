var family = {
    'address' : 'Seuol',
    members: {},
    addFamily: function(age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        };
    },
    getHeadCount: function() {
        return Object.keys(this.members).length;
    }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');


// 객체 속성 접근
var printMembers = function() {
    var members = family.members;

    for (role in members) {
        console.log('role => ' + role + ', name => ' + members[role].name + ', age => ' + members[role].age);
    }
};
printMembers();

console.log('\n');

// 객체 속성 추가/수정/삭제
var members = family.members;
members['nephew'] = {age: 3, name: 'hyun'};         // 객체 속성 추가
members.niece = {age: 5, name: 'lyn'};              // 객체 속성 수정
delete members.aunt;                                // 객체 속성 삭제
delete members['dog'];                              // 객체 속성 삭제
printMembers();