// Promise 조합하기

// 하나의 비동기 계산이 다른 비동기 계산의 결과에 의해 처리되어야 하는 경우가 많았음
// Promise가 난오기 이전에는 콜백 패턴을 통해 비동기 처리를 하였고, 중첩된 비동기 코드들을 처리하다 보면 콜백 피라미드 형태의 코드들이 쉽게 나왔음

// 이런 비동기 코드들의 조합을 Promise 기반으로 작성하면 명료한 코드를 작성할 수 있고 예외 처리를 손쉽게 할 수 있음
// Promise의 then 메소드에서 새로운 비동기 코드를 실행하는 Promise를 반환할 수 있는데 다음 then 메소드는 새롭게 만들어진 Promise 코드가 이행되기 전까지 호출되지 않음

// ex) 1초 후에 주어진 이름의 일을 수행하여 이행 시 스테미나를 차감할 값을 반환 / 1초 후에 일을 수행하는 약속(Promise) 를 연속적으로 처리하게 됨

// doJob 함수 정의, 스테미나를 속성으로 갖는 객체를 매개변수로 전달받아 스테미나가 50보다 많으면 약속이 이행됨
// 이행 결과로는 스테미나를 차감할 값을 포함하는 객체를 전달함, 그리고 스테미나가 50이하면 약속은 거부됨
function doJob(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if (person.stamina > 50) {
            resolve({
                result: `${name} success`,
                loss: 30
            });
           } else {
            reject(new Error(`${name} failed`));
           }
        }, 1000);
    });
};

const harin = {stamina: 100};           // 스테미나 값 100을 가지는 객체 정의

doJob('work', harin)                    // work 이름의 일을 수행하는 약속을 생성
    .then(v => {                        // 전달된 인자의 스테미나가 100이기 때문에 성공적으로 이행되고 then 메소드 전달한 콜백 함수에 차감될 스테미나와 결과값이 전달됨
        console.log(v.result);
        harin.stamina -= v.loss;
        // 추가
        console.log(harin.stamina);
        return doJob('study', harin);   // then 메소드에 전달한 콜백 함수에서 study 이름의 일을 수행하는 약속을 반환함
    })                                  // 이렇게 반환된 약속이 이행되면 다음에 연결된 then 메소드의 콜백 함수에서 앞서 반환한 약속의 이행 결과가 전달됨
    .then(v => {
        console.log(v.result);          // 공부하는 약속에 이행된 결과를 콘솔에 출력하고 스테미나 차감
        harin.stamina -= v.loss;        // 그리고 다시 work 이름의 일을 수행하는 약속을 생성하여 반환
        // 추가
        console.log(harin.stamina);
        return doJob('work', harin);
    })
    .then(v => {                        // 이전 then 메소드 콜백 함수에서 반환된 work 이름의 일을 수행하는 약속의 이행 결과를 인자로 전달 받음
        console.log(v.result);          // 하지만 이전까지의 수행된 일들 때문에 스테미나가 50이하까지 차감되어 이 콜백 함수는 호출되지 않음 (이전 약속이 거부되었기 때문)
        harin.stamina -= v.loss;
        return doJob('study', harin);
    })
    .catch(e => console.error(e));      // 앞에 이어지는 약속들의 연결에서 에러가 발생하게 되면 catch 메소드의 콜백 함수가 호출됨 (45라인의 then 메소드의 전달된 콜백 함수에서 반환한 약속이 거부)