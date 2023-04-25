import { Component } from '../core/heropy';
import movieStore from '../store/movie';
import MovieItem from './MovieItem';

// 구독, 감시(subscribe)를 해서
// 'movies'라는 상태가 서버에서 영화 정보를 가지고 와서 갱신 될 때 마다 콜백 함수가 실행될 수 있는 구조

export default class MovieList extends Component {
  constructor() {
    super()
    movieStore.subscribe('movies', () => {  // movies가 변경되면 render가 실행 될 수 있도록
      this.render()
    })
    movieStore.subscribe('loading', () => {
      this.render()
    })
    movieStore.subscribe('message', () => {
      this.render()
    })
  }
  render() {
    this.el.classList.add('movie-list')
    this.el.innerHTML = /* html */ `
      ${movieStore.state.message 
        ? `<div class="message">${movieStore.state.message}</div>` 
        : '<div class="movies"></div>'}
      <div class="the-loader hide"></div>
    `

    const moviesEl = this.el.querySelector('.movies')
    moviesEl?.append(
      ...movieStore.state.movies.map(movie => new MovieItem({
        movie
      }).el)
    )

    // 로딩(loading)
    const loaderEl = this.el.querySelector('.the-loader')
    movieStore.state.loading 
      ? loaderEl.classList.remove('hide') 
      : loaderEl.classList.add('hide')
  }
}


// this.el.innerHTML = /* html */ `
//       ${movieStore.state.message  // message참이라면===빈 문자가 아니라면
//       ? `<div class="message>${movieStore.state.message}</div>` // message의 상태(state) 부분을 출력할 수 있고, message가 없으면 movies로 화면에 영화의 목록을 출력
//       : '<div class="movies"></div>'}
//       <div class="the-loader hide"></div>
//     `

// // 선택적 체이닝(?), moviesEl 존재할때만 append 메소드가 동작하도록
// moviesEl?.append(

// 클래스 선택자
// loading이라는 데이터의 상태에 맞게
// hide를 제거,
// 추가해서 보이거나 보이지 않도록

// 최상위요소 // 템플릿 리터럴 ``
// moviesEl에 데이터를 기반으로 내용을 채운다
// .map 배열데이터에서 사용하는 대표적은 프로토타입 메소드
// movies에 map이라는 메소드로, 각각의 MovieItem 컴포넌트를 반환하도록 만들어 줬다
// .map이라는 메소드는 최종적으로 콜백에서 반환하는 각각의 데이터로 새로운 배열을 반환해준다
// moviesEl.append를 통해서 출력하는 내용이 배열 데이터라면 안된다, 그래서 앞에 전개연산자가 필요하다!!(...)

// <div class="movies"></div>            // 영화의 내용이 출력
// <div class="the-loader hide"></div>   // 로딩애니메이션이 적용될 수 있도록, hide(숨김)도 같이