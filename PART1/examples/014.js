var store = {snack: 1000, flower: 5000, beverage: 2000};

for (var item in store) {
    // hasOwnProperty : store 객체에 item 키 정보가 있는지 확인 (for ~ in 반복문을 사용할 때에는 hasOwnProperty 를 통해 객체 안에 속성이 있는지 한 번 더 확인하는 것이 좋음)
    if (!store.hasOwnProperty(item)) continue;

    console.log(item + '는 가격이 ' + store[item] + ' 입니다.');
}