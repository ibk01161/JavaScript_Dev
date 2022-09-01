// 배열 인덱스로 특정 요소 수정하기 (splice)
const fruites = ['melon', 'lemon', 'source', 'apple', 'juice'];

fruites.splice(4, 1);                                                           // juice 삭제
fruites.splice(4, 0, 'grape');                                                  // 삭제할 개수를 지정하지 않아 삭제X, grape 문자열 추가
fruites.splice(2, 1, 'mandarin', 'strawberry', 'watermelon');                   // source 삭제, 세 번째 인자를 활용하면 두 개 이상의 요소를 추가할 수 있음

console.log(fruites);