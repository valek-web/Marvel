import React from 'react'
import { NavLink } from 'react-router-dom'
import './Comics.css'

export const Comics = (props) => {
  return (
    <section className='comics'>
      <div className='container'>
        <div className='comics__wrapper'>
          {props.comics[0].map((item) => {
            return (
              <NavLink to={`${item.id}`} key={item.id}>
                <ComicsItem
                  title={item.title}
                  price={item.prices[0].price}
                  img={item.thumbnail}
                />
              </NavLink>
            )
          })}
        </div>
        <button
          className='button'
          onClick={props.newComics}
          disabled={props.disableButton}
        >
          {props.disableButton ? 'Loading...' : 'LOAD MORE'}
        </button>
      </div>
    </section>
  )
}

export const ComicsItem = (props) => {
  return (
    <div className='comicsItem'>
      <div className='comicsItem__img'>
        <img src={`${props.img.path}.${props.img.extension}`} alt='' />
      </div>
      <h1 className='comicsItem__title'>{props.title}</h1>
      <div className='comicsItem__price'>
        {!props.price ? 'NOT AVAILABLE' : props.price}$
      </div>
    </div>
  )
}
