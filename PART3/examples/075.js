// 특정 문자열 위치 확인하기 ① (indexOf)

const str = 'Carpe diem, seiz the day';

// indexOf 메소드는 특정 문자와 일치하는 첫 번재 인덱스 값을 반환
console.log(`"e"는 ${str.indexOf('e')} 번째 인덱스에 있음`);

// indexOf는 대소문자를 구별, 대문자 C는 첫 번째 인덱스를 반환하지만, 소문자 c와 일치하는 문자가 없기 때문에 숫자 -1을 리턴
console.log(`대문자 "C"는 ${str.indexOf('C')} 번째 인덱스에 있음`);
console.log(`소문자 "c"는 ${str.indexOf('c')} 번째 인덱스에 있음`);

// 단일 문자뿐만 아니라 문자열 단위로도 일치 여부를 확인할 수 있음, 이때에도 일치하는 가장 첫번재 인덱스 값을 반환함
console.log(`문자열 ", se"는 ${str.indexOf(', se')} 번째 인덱스에 있음`);

const arr = ['Caarpe', 'diem', 'seize', 'the', 'day'];
const howManyHasE = (arr) => {
    let count = 0;

    // 매개변수로 전달된 arr 변수를 forEach로 순환하면서, 문자열 요소에 소문자 e가 있는지 확인
    // e가 있다면 indexOf 함수의 결과값은 -1보다 큰 수를 반환할거임
    arr.forEach((str) => {
        if (str.indexOf('e') > -1) {
            count++;
        }
    });
    return count;
}

console.log(`${arr}에 "e"가 있는 요소는 모두 ${howManyHasE(arr)} 개 임`);