// 프로젝트에서 관리하는 페이지들을 정리하는 파일

import { createRouter } from "../core/heropy";
import Home from "./Home";
import Movie from "./Movie";
import About from "./About";
import NotFound from "./NotFound";

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/movie", component: Movie },
  { path: "#/about", component: About },
  { path: ".*", component: NotFound }, // '.*' === '.{0,}'
]);

// 메인 페이지
// 영화의 상세 정보 페이지
// 어바웃 페이지
// 페이지를 찾을 수 없다(페이지를 찾을 수 없을 때에 해당하는 내용 작성)

// src/core/heropy.js
// routeRender > currentRoute > routes.find()
// 미리 만들어놓은 내용들을 제외한 모든 내용이 일치하도록 문자를 작성
// 정규표현식에서 모든 내용(모든 문자와)과 일치하게 하려면 일단 .(마침표) 하나를 작성한다
// . 임의의 한 문자와 일치할 수 있는
// 일치를 한글자만 하면 안되니까(모든 주소의 경로와 일치 할 수 있도록)
// {0,} 0개 이상의 일치 === *(축약으로 사용 가능하다)
