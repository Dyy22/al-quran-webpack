import DataSource from '../data/data-source'
import image from '../../images/alquran.png'
import '../components/app-bar'
import '../components/image-figure'
import '../components/surah-list'
import '../components/scroll-top'
import '../components/verse-list'
import '../components/search-bar'
import 'regenerator-runtime'

const main = () => {
  const surahListElement = document.querySelector('surah-list')
  const imageFigureElement = document.querySelector('image-figure')
  const scrollTopElement = document.querySelector('scroll-top')
  const appBarElement = document.querySelector('app-bar')
  const verseListElement = document.querySelector('verse-list')
  const searchBarElement = document.querySelector('search-bar')
  const surahList = []

  const getAllSurah = async () => {
    const result = await DataSource.getAllSurah()
    surahList.push(...result.data.data)

    renderResult(surahList)
  }

  const getSurahDetail = async (id) => {
    const result = await DataSource.getSurahDetail(id)
    return result.data.data
  }

  const renderResult = results => {
    surahListElement.surahList = results
  }

  const setImage = () => {
    imageFigureElement.source = image
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 })
  }

  const handleSurahDetail = async (id) => {
    const surahDetail = await getSurahDetail(id)

    appBarElement.detail = surahDetail
    imageFigureElement.classList.toggle('hidden')
    surahListElement.classList.toggle('hidden')
    searchBarElement.classList.toggle('hidden')

    verseListElement.surahDetail = surahDetail
  }

  const handleBackButton = () => {
    appBarElement.detail = null
    surahListElement.classList.toggle('hidden')
    imageFigureElement.classList.toggle('hidden')
    verseListElement.classList.toggle('hidden')
    searchBarElement.classList.toggle('hidden')
  }

  const handleSearchBar = (event) => {
    const query = event.target.value
    const filteredList = surahList.filter(surah => surah.name.transliteration.id.toLowerCase().includes(query))

    renderResult(filteredList)
    console.log(query)
  }

  surahListElement.itemClickEvent = handleSurahDetail
  searchBarElement.keypressEvent = handleSearchBar
  scrollTopElement.clickEvent = handleScrollTop
  appBarElement.backEvent = handleBackButton

  getAllSurah()
  setImage()
}

export default main
