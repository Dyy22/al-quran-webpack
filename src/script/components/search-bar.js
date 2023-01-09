class SearchBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  set keypressEvent (event) {
    this._keypressEvent = event
    this.render()
  }

  get keypressEvent () {
    return this._keypressEvent
  }

  render () {
    this.innerHTML = `
      <div class="container mx-auto xl:px-10">
        <h1 class="font-balsamiq font-bold text-4xl text-green-4 text-center my-16">
          Daftar Surah
        </h1>
        <form class="flex justify-center">
          <input 
          id="surahSearch"
          title="surahSearch" 
          type="text"
          placeholder="Cari Disini"
          class="rounded-[50px] w-full xl:w-8/12 h-16 mx-auto shadow-md px-10 font-balsamiq mb-10 text-xl text-green-4 focus:outline-none placeholder-inherit placeholder:opacity-70"
          >
          </input>
        </form>
      </div>
    `
    this.querySelector('form').addEventListener('submit', (event) => event.preventDefault())
    this.querySelector('#surahSearch').addEventListener('keyup', this.keypressEvent)
  }
}

customElements.define('search-bar', SearchBar)
