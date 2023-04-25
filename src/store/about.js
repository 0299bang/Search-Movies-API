import { Store } from '../core/heropy';

export default new Store({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'BANG / BangMiSun',
  email: '0299bang@gmail.com',
  blog: 'https://heropy.blog',
  github: 'https://github.com/0299bang',
  repository: 'https://github.com/0299bang/Search-Movies-API'
})

// TheFooter.js에서도 데이터를 가져다가 쓸 수 있도록,
// 데이터가 변경되어도 TheFooter의 내용이 자동으로 갱신 되도록