// 반복 가능한 객체와 반복자 이해하기

const items = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];           // 문자열을 문자 하나씩 나눠 배열로 구성하여 변수에 대입

const seq = {
    [Symbol.iterator]() {                               // iterable 규약에 따라 Symbol.iterator 속성을 정의, 속성값으로 매개변수를 받지 않고 객체를 반환하는 함수를 작성
        let i = 0;                                      // 현재 위치를 가리킬 인덱스 i, 처음 위치값인 숫자 0을 대입

        return {
            next() {                                    // items 배열 요소를 차례대로 연속해서 처리 (10 ~ 12)
                const value = items[i];                 // items 변수의 i 인덱스 요소값을 value에 대입하고
                i++;                                    // 대입한 후에는 인덱스 i 값을 1 증가시킴
                const done = i > items.length;          // 인덱스 i 값이 items 배열 요소 길이보다 큰 값인지 확인, 1 증가시킨 뒤 i값이 items 길이보다 크면 true, 작으면 false 이를 done에 대입
                return {value, done};                   // value 변수와 done 변수를 객체 속성으로 정의하여 반환, value는 현재 위치의 요소 값, done은 현재 위치가 items의 끝에 도달했는지에 대한 값
            }                                           // done이 true면 모든 반복 작업이 끝났다는 것, false면 아직 반복할 요소들이 남았다는 것을 의미, done이 항상 false라면 이 객체는 무한을 의미
        }
    }
};

for (let s of seq) console.log(s);                      // 위에서 정의한 반복 동작을 실행, for ... of 구문을 통해 seq요소를 하나씩 반환하여 콘솔로 출력함

const [a, b, c, ... arr] = seq;                         // 비구조화 할당을 통해 seq 요소의 첫 번째, 두 번째, 세 번째 요소를 순서대로 a, b, c 변수에 대입함, 그 외 나머지 값들은 arr에 배열로 대입
console.log('a >>> ', a);
console.log('b >>> ', b);
console.log('c >>> ', c);
console.log('arr >>> ', arr);

// 10 ~ 15 라인이 반복자(Iterator) 객체임
// 반복자 규약에 따라 next() 메소드를 정의하고, 반환 결과는 {value, done} 으로 구성됨