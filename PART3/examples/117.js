// JSON 문자열을 JSON으로 변환하기 (parse)

const jsonStr = '{"drama" : "PET", "season" : 2017, "casting" :'
                + '["koyuki", "matsumoto jun"], "character" : ["sumire", "momo"]}';

console.log(JSON.parse(jsonStr));                           // 대입한 JSON 문자열 값 그대로 JSON으로 변환함
console.log(JSON.parse(jsonStr, (key, val) => {             // 두 번째 인자에 값을 변경하기 위한 callback 함수를 대입, 매개변수로 jsonStr 각 속성의 key, val 이 전달됨
    if (key === 'season') {
        val = 2003;                                         // 키 정보가 'season' 일 때만 값을 숫자 2003 으로 변경, 그 외에는 val 매개변수로 전달된 값 그대로 반환
    }
    return val;
}));

// 원시형 값 중 JSON 문자열이 아니어도 오류 없이 parse 메소드가 실행되는 경우 (number, boolean)
console.log(JSON.parse('13.1'));
console.log(typeof JSON.parse('13.1'));

console.log('\n');

console.log(JSON.parse('false'));
console.log(typeof JSON.parse('false'));

// 특정 원시 자료형을 나타내지 않는 문자형, 또는 배열 형태의 문자형은 실행 즉시 SyntaxError 발생
console.log(JSON.parse('Kiss Carnival'));
console.log(JSON.parse('[2003, 2017]'));