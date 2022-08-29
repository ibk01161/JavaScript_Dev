// 문자열을 특정 구분자에 의해 배열로 나누기 (split)
const capitals = `Prague, Czech Republic
Copenhagen, Denmark
Paris, France
Madrid, Spain
Rome, Italy`;

// split 메소드를 활용하여 변수 capitals 의 문자열 값을 줄바꿈으로 분리, 배열로 변환된 값을 forEach를 통해 순환
// 접근한 변수 s에는 첫 번재 요소 'Prague, Czech Republic' 이 할당되고, 두 번재 요소는 'Copenhagen, Denmark'이 할당
capitals.split('\n').forEach(s => {
    const capital = s.split(',')[0];                            // 각 문장을 다시 split 메소드를 통해 배열로 변환, 구분자 ','로 분리
    const country = s.split(',')[1];
    console.log(`${capital} is in ${country}`);
});