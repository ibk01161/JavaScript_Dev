// 랜덤값 구하기 (random)

// 최소값과 최대값 사이의 무작위의 수를 반환하는 함수
const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);   // Math 객체의 메소드 random 은 무작위의 실수형 값을 반환, 최소 ~ 최대 사이의 무작위 실수값, floor 메소드를 활용해 실수를 정수로 반환
}

for (let i = 0; i < 5; i++) {
    console.log(generateRandom(1, 10));
}

for (let i = 0; i <5; i++) {
    console.log(generateRandom(10, 100));
}