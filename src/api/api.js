import axios from 'axios'

const API_KYE = 'eb042783b5351a7c7c1c06b5ccc071c6'

export const MarvelAPI = {
  getCharactersAPI: (str) => {
    return axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?limit=${str}&offset=1&apikey=${API_KYE}`
      )
      .then((res) => {
        if (res.status === 200) {
          return res.data.data.results
        }
      })
  },
  getComicsAPI(str) {
    return axios
      .get(
        `https://gateway.marvel.com:443/v1/public/comics?limit=${str}&apikey=${API_KYE}`
      )
      .then((res) => {
        if (res.status === 200) {
          debugger
          return res.data.data.results
        }
      })
  },
}
