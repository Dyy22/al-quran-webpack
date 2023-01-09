class SurahItem extends HTMLElement {
  set surah (surah) {
    this._surah = surah
    this.render()
  }

  get surah () {
    return this._surah
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
      <div class="surah-item bg-white rounded-[50px] h-full shadow-md p-8 grid grid-cols-2 gap-5 grid-rows-2 font-balsamiq cursor-pointer hover:animate-bounce">
        <div class="bg-green-4 text-white text-lg w-10 h-10 rounded-full flex justify-center items-center ">
          <p class="mt-[1px]">
            ${this.surah.number}
          </p>
        </div>
        <div class="text-right text-xl">
          <p class="text-green-3 mb-1">
            ${this.surah.revelation.id}
          </p>
          <p class="text-green-2">
            ${this.surah.numberOfVerses} Ayat
          </p>
        </div>
        <div class="flex flex-col justify-end">
          <p class="font-bold text-xl xl:text-2xl text-green-4">
            ${this.surah.name.transliteration.id}
          </p>
          <p class="text-green-3 ">
            ${this.surah.name.translation.id}
          </p>
        </div>
        <div class="grid place-content-end">
          <p
            dir="rtl"
            lang="ar"
            class="text-5xl font-amiri font-bold text-green-4"
          >
            ${this.surah.name.short}
          </p>
        </div>
      </div>
    `

    this.addEventListener('click', this.clickEvent)
  }
}

customElements.define('surah-item', SurahItem)
