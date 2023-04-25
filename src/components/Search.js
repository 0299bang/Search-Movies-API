import { Component } from '../core/heropy';
import movieStore, { searchMovies } from '../store/movie';

// 입력과 검색, Enter, button
export default class Search extends Component {
  render() {
    this.el.classList.add('search')
    this.el.innerHTML = /* html */ `
      <input 
        value="${movieStore.state.searchText}" 
        placeholder="Enter the movie title to search!" />
      <button class="btn btn-primary">
        Search!
      </button>
    `

    // 입력
    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value
    })
    // 사용자가 어떤 내용을 입력하면
    // 사용자가 입력한 내용이 searchText로 할당

    // enter키를 눌러서 검색
    inputEl.addEventListener('keydown', event => {
      if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })
    // 사용자가 enter키를 누르고, 검색하려는 텍스트가 존재하는 경우에만
    // searchMovies 함수가 동작할 수 있다, // page 1

    // 버튼을 눌러서 검색
    const btnEl = this.el.querySelector('.btn')
    btnEl.addEventListener('click', () => {
      // 검색어가 있으면 함수를 실행
      if (movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })
  }
}

// Search와 Movie list
// 서로 다른 컴포넌트에서 같은 데이터를 취급해야 하는 스토어 개념이 필요