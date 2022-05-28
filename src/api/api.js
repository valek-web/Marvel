import axios from 'axios'

const API_KYE = 'eb042783b5351a7c7c1c06b5ccc071c6'

export const MarvelAPI = {
  getCharactersAPI() {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?apikey=${API_KYE}`
      )
      .then((res) => {
        debugger
        if (res.status === 200) {
          return res.data.data.results
        }
      })
  },
  getComicsAPI() {
    axios
      .get(`https://gateway.marvel.com:443/v1/public/comics?apikey=${API_KYE}`)
      .then((res) => {
        if (res.status === 200) {
          return res.data.data
        }
      })
  },
}
