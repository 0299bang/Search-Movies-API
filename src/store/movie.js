import { Store } from '../core/heropy';

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},  // 영화의 상세정보를 가져와서 데이터 채울, 빈 객체 데이터 초기화
  loading: false,
  message: 'Search for the movie title!'
})

export default store
export const searchMovies = async page => {
  store.state.loading = true    // loading 시작
  store.state.page = page   // 매개변수로 받은 페이지의 값을 할당(다음페이지)
  if (page === 1) {
    store.state.movies = []
    store.state.message = ''  // 빈 문자로 초기화
  }
  try {
    const res = await fetch('/api/movie', {
      method: 'POST',  // GET이 기본, body의 정보를 담으려면 POST
      body:  JSON.stringify({
        title: store.state.searchText,
        page
      })
    })
    const { Search, totalResults, Response, Error } = await res.json()
    if (Response === 'True') {
      store.state.movies = [
        ...store.state.movies,
        ...Search
      ]
      store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    } else {
      store.state.message = Error
    }
  } catch (error) {
    console.log('searchMovies error:', error)
  } finally {
    store.state.loading = false   // 로딩(loading) 애니메이션 종료
  }
}
// 영화의 상세정보를 가져오는 함수 만들기
export const getMovieDetails = async id => {
  try {
    // /api/movie 서버 부분과 통신하도록 변경
    const res = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({
        id
      })
    })
    store.state.movie = await res.json()
  } catch (error) {
    console.log('getMovieDetails error:', error)
  }
}

// js의 fetch실행 부분에 에러가 잘 발생한다, try-catch 로 변경
// try-catch 문은 js에서 예외처리를 위해 사용되는 구문이다
// try 블록 안에서 실행되는 코드에서 에러가 발생하면, catch 블록 안에 있는 코드가 실행된다
// catch 블록은 예외 객체를 전달받아서 해당 예외를 처리합니다

// store.state.pageMax = Math.ceil(Number(totalResults) / 10)
// 우리가 가져올 수 있는 페이지의 최대 번호

// totalResults는 문자데이터라서 숫자데이터로 변경해줘야 한다
// 한번에 열개씩 이니까 나누기 10
// 소수점 올림 처리, Math객체의 ceil 메소드 사용
// 현재의 페이지와 페이지 맥스의 상태를 비교해서, 아직 현재의 페이지 수가 최대 페이지 수까지 도달하지 못했다면, 더보기 버튼 보여줘야 함


// 계속 갱신, 아래의 내용에 따라

// 새로운 내용을 검색하는 경우 === 페이지 번호가 1
// 페이지 상태도 숫자 1로 초기화
// 빈 배열로 초기화


// const { Search } = await res.json() // 객체구조분해할당으로 Search 속성을 꺼내고
//   store.state.movies = [  // movies라는 상태를 갱신 // 배열 리터럴, 전개 연산자

// searchMovies 함수는 page 번호를 받아서 실제 fetch함수를 통해서 결과를 가져온다
// res.json으로 가져온 결과를 분석해서
// json 변수에 할당하고, json 변수를 콘솔에 출력
// export const searchMovies = async page => {
//   const res = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${store.state.searchMovies}&page=${page}`)
//   const json = await res.json()
//   console.log(json)
// }

// OMDb API
// Parameter: page
// Default Value: 1(1~10), 2(11~20), 3(21~30)...
// 한번에 최대 10개 까지, 페이지 번호를 늘려서 이후의 목록도 가져올 수 있다

// Parameter: s (Movie title to search for)
// Parameter: page (Page number to return.)

// apikey=7035c60c
// &s=${store.state.searchMovies}
// &page=${page}

// 스토어의 생성자 함수가 호출 된 결과로, 스토어라는 이름의 인스턴스
// 우리가 만든 상태, 즉 데이터 부분을 쓸 수 있다 store.state.searchMovies