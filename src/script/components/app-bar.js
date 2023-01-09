class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  set detail (detail) {
    this._detail = detail
    this.render()
  }

  get detail () {
    return this._detail
  }

  set backEvent (event) {
    this._backEvent = event
    this.render()
  }

  get backEvent () {
    return this._backEvent
  }

  render () {
    const navClass = ['container', 'mx-auto', 'p-4', 'xl:px-10']
    navClass.push(
      this.detail
        ? ['grid', 'grid-cols-3', 'place-items-center']
        : ['flex', 'justify-between', 'items-center']
    )
    this.innerHTML = `
      <nav class="${navClass.flat().join(' ')}">
        <h1 class="text-xl md:text-2xl xl:text-3xl font-bold">
          ${this.detail ? this.detail.name.transliteration.id : 'Al Quran'}
        </h1>
      </nav>
    `

    const navbar = this.querySelector('nav')

    const backButton = document.createElement('div')
    backButton.className = 'justify-self-start cursor-pointer'
    backButton.addEventListener('click', this.backEvent)

    const backLogo = document.createElement('i')
    backLogo.className = 'fa-solid fa-angle-left text-3xl'
    backButton.appendChild(backLogo)

    if (this.detail) {
      navbar.insertAdjacentElement('afterbegin', backButton)
    }
  }
}

customElements.define('app-bar', AppBar)
