import React from 'react'
import './Loading.css'

export const Loading = () => {
  return (
    <div className='loading'>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
