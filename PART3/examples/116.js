// JSON을 문자열로 변환하기 (stringify)

const testStringify = {
    stringifiedNum: JSON.stringify(13.1),
    stringifiedStr: JSON.stringify('Kiss Carnival'),
    stringifiedBln: JSON.stringify(false),
    stringifiedArr: JSON.stringify([2003, 2017])
};

// testStringify 객체를 for... in 으로 순회하면서,직접 정의한 속성 키 정보가 변수 key에 할당
for (let key in testStringify) {
    console.log(`------------${key}---------------`);
    console.log(typeof testStringify[key]);                 // stringfy는 대입된 모든 값을 JSON 문자열 자료형으로 변환하기 때문에, 결과값 String을 출력
    console.log(testStringify[key]);
}

console.log(`-------------stringifyObj----------------`);

const obj = {
    drama: 'PET',
    season: 2017,
    casting: ['koyuki', 'matsumoto jun'],
    character: ['sumire', 'momo']
};

console.log(typeof JSON.stringify(obj));
console.log(JSON.stringify(obj));                                   // 객체 값이 문자 자료형으로 변환되어 출력
console.log(JSON.stringify(obj, ['drama', 'season']));              // 두 번째 인자에 ['drama', 'season'] 을 넣으면 변수 obj 객체에서 drama, season 속성만 담은 객체가 JSON 문자열로 반환됨
console.log(JSON.stringify(obj, null, 4));                          // 세 번째 인자에 숫자 4 대입 => JSON 문자열의 들여쓰기가 공백 4개 기준으로 출력됨

// 두 번째 인자에 callback 함수를 대입, 객체 obj를 순회하여 각 요소의 key와 value값을 각각 변수로 할당받고, 이어지는 함수 구문 실행
console.log(JSON.stringify(obj, (key, val) => {
    if (key === 'season') return 2003;              // key 값이 season 문자열과 완전 일치하면 숫자 2003을 반환, 그 외에는 전달된 val 값 그대로 반환
    return val;
}, 4));