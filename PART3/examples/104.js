// 객체 변경되지 않도록 하기 (freeze)

// 나중에 freeze 메소드를 실행한 뒤ㅏ 다시 obj 변수로 할당하기 때문에 obj 변수는 let으로 선언
let obj = {};

obj.title = 'IDOL';                     // freeze 실행 전에는 얼마든지 객체 수정 가능
obj = Object.freeze(obj);
obj.title = 'Euphoria';                 // freeze를 실행한 뒤라 객체가 변경되지 않음, 이 때 'use strict' 가 선언된 상태가 아니므로 에러는 발생하지 않음

console.log(obj);

const changeUntilNum = (obj, num) => {
    'use strict';                                   // strict mode on..

    while (true) {                                  // 반복문 내부에 에러가 발생하면 반복문은 멈춤
        console.log(obj);

        if (obj.age >= num) {                       // 객체 obj의 age속성값이 num 보다 같거나 큰지 확인, 확인 결과가 true이면 freeze()로 객체를 동결하고 obj로 재할당
            obj = Object.freeze(obj);
        }
        obj.age += 1;                               // strict mode가 선언된 후 객체 obj를 수정하게 되면 에러발생
    }
}

let profile = {name: '지연', age: 25};
changeUntilNum(profile, 30);