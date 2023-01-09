class ScrollTop extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  scrollToTop () {
    window.scrollTo({ top: 0 })
  }

  set clickEvent (event) {
    this._clickEvent = event
    this.render()
  }

  get clickEvent () {
    return this._clickEvent
  }

  render () {
    this.innerHTML = `
    <div class="sticky bottom-10 container mx-auto pr-5 xl:pr-10">
      <div
        class="scroll-button p-3 bg-white drop-shadow-xl rounded-full w-12 h-12 grid place-content-center text-xl ml-auto cursor-pointer hover:animate-bounce"
      >
      <i class="fa-solid fa-angle-up text-green-4 text-2xl"></i>
      </div>
    </div>
    `

    document.querySelector('.scroll-button').addEventListener('click', this.clickEvent)
  }
}

customElements.define('scroll-top', ScrollTop)
