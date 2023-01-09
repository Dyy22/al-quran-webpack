class ImageFigure extends HTMLElement {
  set source (source) {
    this._source = source
    this.render()
  }

  get source () {
    return this._source
  }

  render () {
    this.innerHTML = `
        <figure class="p-10 mt-5">
            <img src=${this.source} alt="alquran" class="drop-shadow-xl mx-auto">
        </figure>
        `
  }
}

customElements.define('image-figure', ImageFigure)
