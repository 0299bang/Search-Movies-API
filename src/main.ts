import App from "./App";
import router from "./routes";

const root = document.querySelector("#root");
root?.append(new App().el);

// 루트 요소를 등록한 후에 실행해야 하는 플러그인!
router();

// ? : optional chaining
// root의 값이 있는 경우에는 append 메소드가 동작하고
// root의 값이 null인 경우에는 append 메소드가 동작하지 않도록
