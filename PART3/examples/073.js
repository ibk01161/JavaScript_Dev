// 두 개의 문자열 하나로 합치기 (concat)
const str1 = 'Good afternoon';
const str2 = ', Good evening';
const str3 = ', and Good night!';
const str4 = ' - The Truman Show, 1998';

// 문자열을 concat으로 합칠 때에는 맨 처음에 놓일 변수를 기준으로 concat 메소드를 호출
// 두 개 이상의 문자열을 추가하려 할 때, 나머지 변수들은 메소드 인자로 문자열을 순서대로 나열하여 대입하면 됨
console.log(str1.concat(str2, str3, str4));