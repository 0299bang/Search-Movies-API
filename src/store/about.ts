import { Store } from "../core/heropy";

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: "https://heropy.blog/css/images/logo.png",
  name: "HEROPY / ParkYoungWoong",
  email: "thesecon@gmail.com",
  blog: "https://heropy.blog",
  github: "https://github.com/ParkYoungWoong",
  repository: "https://github.com/ParkYoungWoong/vanillajs-movie-app",
});

// TheFooter.js에서도 데이터를 가져다가 쓸 수 있도록,
// 데이터가 변경되어도 TheFooter의 내용이 자동으로 갱신 되도록
