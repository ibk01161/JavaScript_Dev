// 059_version.js 모듈로부터 version 이름으로 내보낸 상수값을 가져오는데, 이때 'as' 키워드를 사용하면 현재 모듈에서 다른 이름으로 사용할 수 있음
import {version as moduleVersion} from './059_version.js';

const version = 'v0';
console.log(moduleVersion);