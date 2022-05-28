/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './Characters'
import axios from 'axios'
import { Characters } from './Characters'
export const CharactersContainer = (props) => {
  const [str, setStr] = useState(9)
  const newCharacters = () => {
    setStr(str + 9)
  }
  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?limit=${str}&offset=1&apikey=eb042783b5351a7c7c1c06b5ccc071c6`
      )
      .then((res) => {
        if (res.status === 200) {
          props.getCharacters(res.data.data.results)
        }
      })
  }, [str])
  let component = () => {
    if (!!props.characters) {
      return <Characters {...props} newCharacters={newCharacters} />
    } else {
      return <h1>pad</h1>
    }
  }

  return <>{component()}</>
}
