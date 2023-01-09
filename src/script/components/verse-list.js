import './verse-item'

class VerseList extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  set surahDetail (surahDetail) {
    this._surahDetail = surahDetail
    this.render()
  }

  get surahDetail () {
    return this._surahDetail
  }

  render () {
    this.innerHTML = `
      <div class="container mx-auto xl:px-10">
        <div
          id="info"
          class="font-balsamiq gap-5 my-12 lg:my-20 grid place-content-center"
        >
          <h1 class="drop-shadow-xl order-3 mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          </h1>
        </div>

        <div id="verse-list" class="grid gap-5 my-3">
        </div>
      </div>
    `

    const verseList = this.querySelector('#verse-list')
    const h1 = this.querySelector('h1')

    if (this.surahDetail) {
      h1.innerText = this.surahDetail.number === 1 ? 'أَعُوْذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِِْ' : 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ'

      this.surahDetail.verses.forEach(verse => {
        const verseItem = document.createElement('verse-item')
        verseItem.verse = verse
        verseList.appendChild(verseItem)
      })
    }

    this.classList.toggle('hidden')
    window.scrollTo({ top: 0 })
  }
}

customElements.define('verse-list', VerseList)
