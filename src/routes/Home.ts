import { Component } from "../core/heropy";
import Headline from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import MovieListMore from "../components/MovieListMore";

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    const search = new Search().el;
    const movieList = new MovieList().el;
    const movieListMore = new MovieListMore().el;

    this.el.classList.add("container");
    this.el.append(headline, search, movieList, movieListMore);
  }
}

// export default class Home extends Component { // Home 컨포넌트는
//   render() {
//     const headline = new Headline().el        // 변수 할당
//     const search = new Search().el
//     const movieList = new MovieList().el
//     const movieListMore = new MovieListMore().el

//     this.el.classList.add('container')        // 제일 먼저 컨테이너이름을 가지고있는 div요소로 만들어질 것이고
//     this.el.append(                           // 내부에
//       headline,                               // headline컴포넌트의 요소를 밀어넣는다
//       search,
//       movieList,
//       movieListMore
//     )
//   }
// }
