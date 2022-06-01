/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './Characters'
// import axios from 'axios'
import { Characters } from './Characters'
import { MarvelAPI } from '../../api/api'
import { Loading } from '../generic/Loading'

export const CharactersContainer = (props) => {
  const [str, setStr] = useState(9)
  const [disableButton, setDisableButton] = useState(false)
  const newCharacters = () => {
    setStr(str + 9)
    setDisableButton(true)
  }
  useEffect(() => {
    MarvelAPI.getCharactersAPI(str).then((res) => {
      props.getCharacters(res)
      setDisableButton(false)
    })
  }, [str])
  let component = () => {
    if (!!props.characters) {
      return (
        <Characters
          {...props}
          disableButton={disableButton}
          newCharacters={newCharacters}
        />
      )
    } else {
      return <Loading />
    }
  }

  return <>{component()}</>
}
