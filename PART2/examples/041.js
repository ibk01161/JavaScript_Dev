if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}
console.log(functionScopeValue);        // var 키워드로 정의한 변수는 '함수 단위'의 유효범위를 가지게 되어 if문 블록에서 정의해도 블록 밖에서 접근 가능
console.log(blockScopeValue);           // let 키워드로 정의한 변수는 '블록 단위'의 유효범위를 가지게 되어 if문 블록밖에서 접근할 경우 ReferenceError 발생