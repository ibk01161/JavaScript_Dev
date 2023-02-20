// Set 객체로 Array 중복 요소 없애기

const arr = ['one', 'two', 'three', 'two', 'one', 'four'];      // 변수 arr에 배열 자료형 대입, 값에는 'two'와 'one' 요소가 중복되어 있음
const s = new Set(arr);                                         // 배열을 Set으로 변환, 'new Set()'의 인자로 arr 변수를 넣으면 Set 생성자를 통해 배열이 Set으로 변환됨, Set객체는 중복값이 허용되지 않기 대문에 기존 배열의 중복값이 제거됨
console.log([...s]);                                            // 대괄호 []와 ... 연산자를 통해 Set 객체값들이 전개된 배열로 변환됨