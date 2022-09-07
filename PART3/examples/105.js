// 객체에 속성 추가 못하게 만들기 (seal)

const album = {
    name: 'LOVE YOURSELF'
};

// 선언된 객체 album에 속성 song과 singer 추가, Object.seal을 호출하기 전에는 기존 객체와 동일하게 마음대로 속성을 추가할 수 있음
album.song = 'Euphoria';
album.singer = 'RM';

console.log(album);

Object.seal(album);

album.comment = 'Answer';               // 봉인(seal)된 객체는 새로운 속성을 추가할 수 없음
album.singer = 'JK';                    // 봉인(seal)된 객체는 기존 속성에 대해 변경 가능
delete album.name;                      // 봉인(seal)된 객체는 기존 속성을 삭제할 수 없음

console.log(album);