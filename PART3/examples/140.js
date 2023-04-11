// Async 이해하기 (ECMAScript2017(ES8) 에서 소개됨)

// async 함수는 함수 안의 await 구문과 함께 비동기 작업을 제어함, await 키워드는 반드시 async 함수 안에서만 유효함

// async 함수의 동작 방식은, 처음 async 함수가 호출되어 await 키워드가 있는 비동기 작업(promise 객체)이 실행되면, 해당 비동기 함수는 이벤트 루프를 통해 비동기로 작업을 처리함
// 그동안 async 함수는 이러한 비동기 작업이 완료될 때까지 일시 중지 상태로 비동기 작업(promise 객체)의 해결(resolve)을 기다림
// 이 작업이 완료되면 async 함수가 다시 실행되고 함수 결과를 반환함

// async 함수를 선언하는 방법에는 'async 함수 선언문(async function)' 과 '표현식(async function expression)' 이 있음, function 선언 앞에 async 키워드가 붙음


function doJob(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if (person.stamina > 50) {
            person.stamina -= 30;
            resolve({
                result: `${name} success`
            });
           } else {
            reject(new Error(`${name} failed`));
           }
        }, 1000);
    });
};

const harin = {stamina: 100};           // 스테미나 값 100을 가지는 객체 정의

const execute = async function() {
    try {
        let v = await doJob('work', harin);
        console.log(v.result);
        // 여기서부터
    } catch (e) {
        console.log(e);
    }
}

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