// Map 객체 순환하기 2

const map = new Map();

for (let num of [1, 2, 3, 4, 5]) {                  // 1부터 5까지 값을 num 변수에 전달함
    map.set((value) => value * 2, num);             // map에 요소 추가, key를 (value) => value * 2 함수로 정의하고, 값은 전달된 num을 할당함, 함수형 키와 숫자형 값을 지님
}

// map 변수를 for...of로 순환, 순환할 때 매개변수 func와 value 변수를 전달받음, value 변수를 다시 인자로 넣어 함수 func를 실행함
for (let [func, value] of map) {
    console.log(func(value));
}