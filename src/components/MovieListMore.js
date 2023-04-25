import { Component } from '../core/heropy';
import movieStore, { searchMovies } from '../store/movie';

export default class MovieListMore extends Component {
  constructor() {
    super ({
      tagName: 'button'
    })
    movieStore.subscribe('pageMax', () => {
      const { page, pageMax } = movieStore.state
      pageMax > page 
        ? this.el.classList.remove('hide') 
        : this.el.classList.add('hide')
    })
  }
  render() {
    this.el.classList.add('btn', 'view-more', 'hide')
    this.el.textContent = 'View more..'

    this.el.addEventListener('click', async () => {
      // 영화의 정보를 가져오기 직전에, 더보기 버튼을 사용자가 또한번 누르는 것을 방지하기 위해서
      this.el.classList.add('hide')
      await searchMovies(movieStore.state.page + 1)  // 다음 페이지
    })
  }
}

// 더보기 버튼에 대한 내용들
// movieStore.subscribe('pageMax', () => {
//   // movieStore.state.page
//   // movieStore.state.pageMax
//   const { page, pageMax } = movieStore.state //객체구조분해할당

//   if (pageMax > page) {
//     this.el.classList.remove('hide')  // 더보기 버튼을 하이드(숨김)를 제거해서 보여주고
//   } else {
//     this.el.classList.add('hide') // 그렇지 않다면 하이드 추가해서 화면에 보이지 않게 하겠다
//   }
//   // if조건을 삼항연산자로 작성하면 코드의 수가 조금 줄어든다, 원하는 방법 사용하자
//   // pageMax > page ? A : B //삼항연산자
// })