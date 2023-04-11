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
        v = await doJob('study', harin);
        console.log(v.result);
        v = await doJob('work', harin);
        console.log(v.result);
        v = await doJob('study', harin);
    } catch (e) {
        console.log(e);
    }
}

execute();