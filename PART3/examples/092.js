// 배열 정렬하기 (sort)
const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
    {id: 2, name: 'Leo'},
    {id: 0, name: 'Daniel'},
    {id: 3, name: 'Asher'},
    {id: 4, name: 'Chloe'},
    {id: 1, name: 'Chloe'}
];

numArr1.sort(function(a, b) {return a - b});                // 비교 함수가 a - b를 리턴하여 오름차순으로 배열이 정렬됨
numArr2.sort(function(a, b) {return b - a});                // 비교 함수가 b - a를 리턴하여 내림차순으로 배열이 정렬됨
objArr.sort(function(a, b) {
    if (a.name > b.name) return 1;                          // 앞 요소 (a)의 name 속성값이 뒤에 있는 요소 (b)의 name 속성보다 크면 1을 반환, a를 b 앞에 정렬
    else if (b.name > a.name) return -1;                    // -1을 반환하기 때문에 b를 a 앞에 정렬시킴
    else return 0;                                          // 앞 (a)와 뒤 (b)의 name 속성값이 같으면 0을 반환, 위치를 변경하지 않음
});

console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);