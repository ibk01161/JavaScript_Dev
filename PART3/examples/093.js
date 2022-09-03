// 배열의 순서를 반대로 나열하기 (reverse)
const str = 'abcdefghijklmnopqrstuvwxyz';
// split 메소드를 활용해 str 문자열을 배열로 변환, 공백없는 문자열 ''로 분할했기 때문에, 배열 요소에는 알파벳 한 문자씩 넣어짐
const arr = str.split('');
arr.reverse();                      // reverse() 메소드로 배열 arr 요소 순서를 반대로 나열

console.log(arr.join(''));          // join() 메소드에 빈 문자열을 넣어 실행, 배열 arr 이 구분자 없이 한 문자열로 병합됨