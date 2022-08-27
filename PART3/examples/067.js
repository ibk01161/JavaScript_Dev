// 문자열 양 끝의 공백 없애기 (trim)
const sentences = ['    ABC  abc', 'ABC abc        ', `  first
second third
        forth
sentence

`];

// 매개변수로 전달된 배열을 forEach로 순환하여 각 요소에 접근
// 배열 요소에 trim()을 적용하여 공백, 탭, 줄바꿈을 삭제하고, 필터링된 값들은 배열로 다시 반환
const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach(s => {
        filtered.push(s.trim());
    });
    return filtered;
}

console.log(filterSentence(sentences));