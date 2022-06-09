/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { CharacterInfo } from './CharacterInfo'
import './Characters.css'

export const Characters = (props) => {
  const [number, setNumber] = useState(null)
  const setCharacterInfo = (index) => {
    setNumber(index)
  }

  const onClickCharacter = (id) => {
    setCharacterInfo(id)
    if (!props.windowView) {
      props.setWindowView(true)
    }
    console.log('s')
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
                    onClickCharacter={onClickCharacter}
                  />
                )
              })}
            </div>
            <button
              className='button'
              onClick={props.newCharacters}
              disabled={props.disableButton}
            >
              {props.disableButton ? 'Loading...' : 'LOAD MORE'}
            </button>
          </div>
          <div className={props.windowView ? 'info info_active' : 'info'}>
            <CharacterInfo
              info={props.characters[0][number]}
              window={false}
              setWindowView={props.setWindowView}
              windowView={props.windowView}
            />
          </div>
          <div className={props.windowView ? 'bgc bgc_active' : 'bgc'}></div>
        </div>
      </div>
    </section>
  )
}

const Character = (props) => {
  return (
    <div className='character' onClick={() => props.onClickCharacter(props.id)}>
      <img src={`${props.img.path}.${props.img.extension}`} alt='#' />
      <div className='character__title'> {props.name}</div>
    </div>
  )
}
