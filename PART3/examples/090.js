// 배열의 특정 요소 위치 확인하기 (indexOf)
const arr = ['spring', 'summer', 'fall', 'winter', 'is', 'down'];

console.log(`"winter" is in this index ${arr.indexOf('winter')}`);                          
console.log(`"winter" is not in here, look this value ${arr.indexOf('winter', 4)}`);            // arr 배열의 인덱스 4부터 winter 문자열을 검색하면 값을 찾을 수 없으므로 -1 반환