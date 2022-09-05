// 배열 요소 일괄 변경하기 (map)
const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];

const arr2 = arr.map(el => {                    // map 메소드를 통해 arr 배열의 각 요소가 매개변수 el 로 전달
    el.age = el.age + 1;                        // 각 요소의 age 속성에 1을 더하고 다시 속성 age에 대입
    return el;                                  // map 메소드는 callback 함수의 리턴값에 따라 반환되는 배열 값이 바뀜
});                                             // 여기서는 속성만 변경하여 다시 객체를 반환했기 때문에 arr2 변수에는 객체 요소로 구성된 배열이 할당됨

const arr3 = arr.map(el => el.name);            // callback 함수는 전달된 요소의 name 속성만qksghks

console.log(arr2);
console.log(arr3);