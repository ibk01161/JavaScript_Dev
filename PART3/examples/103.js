// 객체를 배열로 변환하기 (entries)

// obj 변수에 객체 리터럴 대입
const obj = {
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: Infinity
};

// entries 메소드로 인해 객체가 배열로 변환됨
const modifiedObj = Object.entries(obj);

console.log(modifiedObj);