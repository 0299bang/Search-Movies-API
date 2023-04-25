import App from './App';
import router from './routes'

const root = document.querySelector('#root')
root.append(new App().el) // 생성자함수로 실행, 실제요소 밀어넣기

router()