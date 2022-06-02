/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MarvelAPI } from '../../api/api'
import { Loading } from '../generic/Loading'
import { Comics } from './Comics'

export const ComicsContainer = (props) => {
  const [str, setStr] = useState(8)
  const [disableButton, setDisableButton] = useState(true)
  const paramsURL = useParams()
  console.log(paramsURL)

  const newComics = () => {
    setStr(str + 8)
  }

  useEffect(() => {
    setDisableButton(true)
    MarvelAPI.getComicsAPI(str).then((req) => {
      props.getComics(req)
      setDisableButton(false)
    })
  }, [str])

  const component = () => {
    if (!props.comics) {
      return <Loading />
    } else {
      return (
        <Comics
          newComics={newComics}
          comics={props.comics}
          disableButton={disableButton}
        />
      )
    }
  }

  return <>{component()}</>
}
