class VerseItem extends HTMLElement {
  set verse (verse) {
    this._verse = verse
    this.render()
  }

  get verse () {
    return this._verse
  }

  render () {
    this.innerHTML = `
      <div
        id="verse-card"
        class="bg-white py-6 px-5 rounded-[20px] md:rounded-[50px] md:p-8 shadow-lg font-balsamiq grid gap-5"
      >
        <div
          id="${this.verse.number.inQuran}"
          class="text-3xl sm:text-4xl md:text-5xl leading-normal sm:leading-relaxed md:leading-relaxed border-b-4 border-green-2 font-amiri text-green-4 items-center px-1"
        >
          <p lang="ar" dir="rtl" class="justify-self-end">
            ${this.verse.text.arab}
          </p>
        </div>
        <div class="text-xs sm:text-base md:text-lg text-green-4 gap-3 flex items-center">
          <p class="text-sm md:text-lg lg:text-xl font-bold px-1">
            ${this.verse.number.inSurah}.
          </p>
          <p class="text-justify">${this.verse.translation.id}</p>
        </div>
      </div>
    `
  }
}

customElements.define('verse-item', VerseItem)
