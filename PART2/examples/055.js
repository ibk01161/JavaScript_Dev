// 즉각 호출 패텅을 통해 함수 정의, util이라는 네임스페이스를 생성
// var 키워드로 생성된 변수의 스코프는 함수이기 때문에 네임스페이스안에 정의된 변수들은 그 외부에서 접근을 못함
var namespaceA = (function() {
    var privateVariable = '비공개 변수';        // 함수 안에 선언된 변수는 함수 내부에서만 접근 가능하기 때문에 비공개 영역이 됨
    return {                                    // 반환되는 객체는 namespaceA에 할당되고, 외부에서 접근이 가능하기 때문에 해당 객체의 속성과 메소드들은 공개API가 됨
        publicApi: function() {
            console.log(privateVariable + ' 를 접근할 수 있음');
        }
    }
})();

// namespaceA의 publicApi 메소드를 호출
namespaceA.publicApi();