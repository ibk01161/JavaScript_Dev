// 정규표현식으로 문자열 치환하기 (replace)

console.log('2018-08-03 07-23-14'.replace('-',':'));                    // '-'를 찾아 ':'로 변환, g플래그가 없기 때문에 첫 번재 '-'만 변경
console.log('2018-08-03 07-23-14'.replace(/-/g,':'));                   // g플래그 사용, '-'과 일치하는 모든 문자열이 변경됨
console.log('2018-08-03 07-23-14'.replace(/\d/g, '9'));                 // /\d/g 는 숫자형값을 모두 찾음, 일치하는 모든 숫자형 값을 '9' 로 변경

const littleWomen = 'Meg March, Jo March, Beth March, Amy March';
console.log(littleWomen.replace(/\w+ March/ig, 'Mrs.$&'));              // 정규표현식 /\w+ March/ig 는 우측에 'March'를 두는 모든 단어들을 찾음, 'Mrs.$&'으로 변경하면 각 단어의 왼쪽에 'Mrs'가 위치

console.log(littleWomen.replace(/\w+ March/ig, (str, d1, d2, d3, d4, offset, s) => {        // 정규표현식으로 일치하는 문자열을 찾아, 두 번재 인자의 함수를 호출
    let tag = '';

    if (/Meg/.test(str)) tag = '첫째'               // 전달된 str 변수에 RegExp의 test메소드를 적용하여 특정 문자열 일치 여부를 확인하고, 각 조건에 맞는 값을 할당
    else if (/Jo/.test(str)) tag = '둘째'
    else if (/Beth/.test(str)) tag = '셋째'
    else if (/Amy/.test(str)) tag = '넷재'

    console.log(`원작 "작은 아씨들"에서 주인공 ${str}은 ${tag} 입니다.`)
    return tag;
}));

const name = 'March Amy';
// 정규표현식의 ()로 문자열을 그룹화 할 수 있음, 표현식으로 일치한 단어들은 replace 두번째 인자에서 $1, $2 순서대로 대입됨, 따라서 '$2 $1'을 통해 두 단어의 앞 뒤 순서가 바뀜
console.log(name.replace(/(March) (Amy)/, '$2 $1'));
// 정규표현식을 적용하여 값을 구분하고, 함수를 통해 값을 교체함, 매개변수로 받은 d1은 'March', d2는 'Amy' 문자열이 각각 전달됨
console.log(name.replace(/(March) (Amy)/, (str, first, second, offset, s) => {
    console.log(`${second} is name, ${first} is first name`);
    return `${second} ${first}`     // 단어 앞뒤 순서가 바뀌어 반환됨
}));