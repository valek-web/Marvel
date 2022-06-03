/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MarvelAPI } from '../../api/api'
import { Loading } from '../generic/Loading'

export const ComicsInfo = (props) => {
  const [load, setLoading] = useState(true)
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    setLoading(true)
    MarvelAPI.getComicsID(id).then((res) => {
      props.setComicInfo(res)
      setLoading(false)
    })
  }, [id])
  !!props.comicsInfo ? console.log(props.comicsInfo[0][0]) : console.log(props)
  return load ? (
    <Loading />
  ) : (
    <section className='comics-info'>
      <div className='container'>
        <div className='comics-info__wrapper'>
          <div className='comics-info__img'>
            <img
              src={`${props.comicsInfo[0][0].thumbnail.path}.${props.comicsInfo[0][0].thumbnail.extension}`}
              alt='#'
            />
          </div>
          <div className='comics-info__info'>
            <h1 className='comics-info__title'>
              {props.comicsInfo[0][0].title}
            </h1>
            <div className='comics-info__desct'>
              {!props.comicsInfo[0][0].description
                ? 'No description'
                : props.comicsInfo[0][0].description}
            </div>
            <div className='comics-info__price'>
              {!props.comicsInfo[0][0].prices[0].price
                ? 'NOT AVAILABLE'
                : props.comicsInfo[0][0].prices[0].price}
              $
            </div>
            <button
              className='button'
              onClick={() => {
                navigate(-1)
              }}
            >
              Back to
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
