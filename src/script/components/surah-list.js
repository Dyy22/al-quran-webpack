import './surah-item'
import './search-bar'

class SurahList extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  set surahList (surahList) {
    this._surahList = surahList
    this.render()
  }

  get surahList () {
    return this._surahList
  }

  set itemClickEvent (event) {
    this._itemClickEvent = event
    this.render()
  }

  get itemClickEvent () {
    return this._itemClickEvent
  }

  render () {
    this.innerHTML = `
      <div id="surah-list" class="container mx-auto xl:px-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-5"></div>
    `
    const surahList = document.getElementById('surah-list')

    if (this._surahList) {
      this._surahList.forEach(surah => {
        const surahItem = document.createElement('surah-item')
        surahItem.surah = surah
        surahItem.clickEvent = () => this.itemClickEvent(surah.number)
        surahList.appendChild(surahItem)
      })
    }
  }
}

customElements.define('surah-list', SurahList)
