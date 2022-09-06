// 101. 객체에서 키만 추출하기 (keys)

// obj 변수에 객체 리터럴 대입
const obj = {
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: Infinity
};

// Object 객체의 메소드 keys를 호출하고, 인자로 obj 변수를 넣음
// keys는 obj 변수에 정의된 속성 키 정보들만 추출, 추출된 값들은 새로운 배열에 담아 변수 arr에 대입
const arr = Object.keys(obj);

console.log(arr);