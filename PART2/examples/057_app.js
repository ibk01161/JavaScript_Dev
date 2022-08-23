// 057_hello.js에서 default로 내보낸 값을 가져오고 import 하는 모듈에서(현재 파일) 이름을 부여
import Hello from './057_hello.js'

// 057_hello.js에서는 클래스를 기본값으로 내보냈기 때문에 new 키워드를 사용해 객체 생성
const koreanHi = new Hello('안녕하세요. ');
koreanHi.hi('하린');