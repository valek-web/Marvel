/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { CharacterInfo } from './CharacterInfo'
import './Characters.css'

export const Characters = (props) => {
  const [number, setNumber] = useState(null)
  const setCharacterInfo = (index) => {
    setNumber(index)
  }

  return (
    <section className='characters'>
      <div className='container'>
        <div className='characters__wrapper'>
          <div className='characters_list-wrapper'>
            <div className='characters_list'>
              {props.characters[0].map((el, index) => {
                return (
                  <Character
                    name={el.name}
                    img={el.thumbnail}
                    key={el.id}
                    id={index}
                    setCharacterInfo={setCharacterInfo}
                  />
                )
              })}
            </div>
            <button
              className='characters__button'
              onClick={props.newCharacters}
            >
              LOAD MORE
            </button>
          </div>
          <div className='info'>
            <CharacterInfo info={props.characters[0][number]} />
          </div>
        </div>
      </div>
    </section>
  )
}

const Character = (props) => {
  return (
    <div className='character' onClick={() => props.setCharacterInfo(props.id)}>
      <img src={`${props.img.path}.${props.img.extension}`} alt='#' />
      <div className='character__title'> {props.name}</div>
    </div>
  )
}
