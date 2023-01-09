import axios from 'axios'

class DataSource {
  static async getAllSurah () {
    try {
      return await axios.get('https://sutanlab-quran-api.vercel.app/surah')
    } catch (error) {
      console.log(error)
    }
  }

  static async getSurahDetail (id) {
    try {
      return await axios.get(`https://sutanlab-quran-api.vercel.app/surah/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
}

export default DataSource
