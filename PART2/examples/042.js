const URL = 'http://js.com';
URL = 'http://js.com';                   // const로 정의된 URL 상수에 새로운 문자열을 할당하면 에러 발생 (재할당을 할 수 없기 때문)
                                         // const는 관례적으로 변하지 않는 값을 정의하기 때문에 대문자로 작성

if (true) {
    const URL2 = 'http://js.com';        // 블록 밖에서 접근할 경우 에러 발생
}

console.log(URL2);