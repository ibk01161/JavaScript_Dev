// 특정 문자열 위치 확인하기 ② (lastIndexOf)
const str = 'Carpe diem, seiz the day';

// lastIndexOf 메소드는 '문자열의 뒤에서부터 동일한 첫 번재 인덱스 값'을 반환
console.log(`"e"는 ${str.lastIndexOf('e')} 번째 인덱스에 있음`);

// lastIndexOf는 대소문자를 구별, 대문자 C는 첫 번째 인덱스를 반환하지만, 소문자 c와 일치하는 문자가 없기 때문에 숫자 -1을 리턴
console.log(`대문자 "C"는 ${str.lastIndexOf('C')} 번째 인덱스에 있음`);
console.log(`소문자 "c"는 ${str.lastIndexOf('c')} 번째 인덱스에 있음`);

// 단일 문자뿐만 아니라 문자열 단위로도 일치 여부를 확인할 수 있음, 이때에도 일치하는 가장 첫번재 인덱스 값을 반환함
console.log(`문자열 ", se"는 ${str.lastIndexOf(', se')} 번째 인덱스에 있음`);