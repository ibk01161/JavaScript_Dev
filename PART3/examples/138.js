// Promise 이해하기

// ECMAScript 2015에서 비동기 처리하기 위해 Promise 객체를 사용함
// Promise는 객체로써 언젠가 완료될 일 (계산) 을 나타냄, 완료되면 하나의 값을 결과로 반환하는데 실패하여 정상적인 값 대신 실패의 이유를 반환할 수도 있음

// Promise 객체의 세 가지 상태
// 1. 대기중 (Pending) : 아직 결과가 없는 상태, 약속을 했지만 아직 약속에 대한 결과가 나오지 않은 상태
// 2. 이행됨 (Fulfilled) : 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태, 이때 결과로 하나의 값이 전달됨
// 3. 거부됨 (Rejected) : 비동기 처리가 실패한 상태, 약속이 거부되고 그 결과로 거절된 이유를 전달함

// Promise 객체의 두 가지 메소드
// 1. then(onFulfilled, onReject) : 약속이 완료됐을 때 호출될 함수들을 정의
//                                  첫번째 인자로 전달되는 함수는 약속이 성공적으로 이행됐을 때 호출되고, 두 번째 인자로 전달된 함수는 거부됐을 때 호출
//                                  두 전달 인자 함수들은 매개변수를 가지는데 각각의 결과가 매개변수를 통해 전달됨
// 2. catch(onReject) : 약속이 거부됐을 때 호출될 함수(onReject)를 등록

// Line 25
// * Promise 객체는 Promise 생성자 함수에 new 키워드를 통해 생성할 수 있음
//   이때 계산될 코드를 담은 함수를 인자로 전달하는데 이 함수에는 resolve와 reject 매개변수를 가짐
//   resolve는 약속을 성공시킬 수 있는 함수로 호출 시 결과를 인자로 전달함, 반면 reject는 실패 처리를 위한 함수로 호출 시 실패 이유를 함께 전달할 수 있음
//   즉, Promise 생성자 함수에 전달되는 함수의 본문에는 나중에 계산이 완료되는 일을 작성하게 됨


function promiseForHomework(mustDo) {                           // 숙제에 대한 Promise 객체를 생성하는 함수를 정의, 이때 mustDo를 정의하고 mustDo에 의해 Promise에 대한 성공과 실패를 결정
    return new Promise((resolve, reject) => {
        setTimeout(() => {                                      // setTimeout 함수를 통해 3초 후 실행될 코드를 정의
           console.log('doing homework');                       // 콘솔에 출력 하는 코드는 3초 후에 실행되고, promiseForHomework 전달받은 인자 값의 유무에 따라 resolve함수 또는 reject 함수가 호출됨
           if (mustDo) {
            resolve({                                           // resolve 함수가 호출되면 이후 then 메소드에 전달된 첫 번째 인자의 함수가 호출되고
                result: 'homework-result'                       // 이때 resolve에 전달한 전달 인자가 then 메소드의 전달된 함수의 매개변수로 전달됨
            });
           } else {
            reject(new Error('Too lazy!'));
           }
        }, 3000);
    });
};

const promiseA = promiseForHomework(true);          // 새로운 Promise 객체를 생성, 이때 true를 인자로 전달하여 3초 후에 약속이 꼭 이행되게 함
console.log(`promiseA created`);                    // 콘솔에 `promiseA created` 출력, 27라인 보다 나중에 작성하였어도 27라인은 3초 후에 실행되는 비동기 코드이기 때문 `promiseA created`가 먼저 출력

const promiseB = promiseForHomework();              // 새로운 Promise 객체 생성, 이전 숙제 Promise와 다르게 전달 인자가 없이 생성하여 3초후 reject가 호출됨
console.log('promiseB created');

// 각 Promise 객체에 resolve와 reject가 되었을 경우 호출될 함수들을 정의
promiseA.then(v => console.log(v));

promiseB
    .then(v => console.log(v))
    .catch(e => console.error(e));