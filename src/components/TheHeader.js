import { Component } from '../core/heropy';

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt4520988'
          },
          {
            name: 'About',
            href: '#/about'
          }
        ]
      }
    })
    window.addEventListener('popstate', () => {   // 페이지가 변경될 때 마다, 아래의 코드 실행되면서
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a 
        href="#/" 
        class="logo">
        <span>OMDbAPI</span>.COM
      </a>
      <nav>
        <ul>  
          <!-- 메뉴와 현재페이지 주소 비교해서, 새롭게 네비게이션 버튼의 active클래스를 추가해줄 수 있다 -->
          ${this.state.menus.map(menu => {
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
            const isActive = href === hash
            return /* html */ `
            <li>
              <a
                class="${isActive ? 'active' : ''}" 
                href="${menu.href}">
                ${menu.name}
              </a>
            </li>
            `
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://heropy.blog/css/images/logo.png" alt="User" />
      </a>
    `
  }
}