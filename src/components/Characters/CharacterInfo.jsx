import { NavLink } from 'react-router-dom'

export const CharacterInfo = (props) => {
  const component = () => {
    if (!!props.info) {
      let element = props.info.comics.items.map((el, index) => {
        if (index >= 10) {
          return null
        } else {
          const link = parseInt(el.resourceURI.replace(/[^\d]/g, '')) + ''
          return (
            <li className='info__element' key={index}>
              <NavLink to={`/comics/${link.slice(1)}`}>{el.name}</NavLink>
            </li>
          )
        }
      })
      return (
        <>
          <div className='info__header'>
            <img
              src={`${props.info.thumbnail.path}.${props.info.thumbnail.extension}`}
              alt=''
            />
            <div className='info__name'>{props.info.name}</div>
          </div>
          <div className='info__descr'>
            {!props.info.description
              ? 'No description'
              : props.info.description}
          </div>
          <div className='info__title'>Comics:</div>
          <ul className='info__list'>{element}</ul>
          <div
            className={props.windowView ? 'x-mark x-mark_active' : 'x-mark'}
            onClick={() => {
              props.setWindowView(false)
            }}
          >
            <span></span>
          </div>
        </>
      )
    } else {
      return (
        <div className='info__text'>
          Please select a character to see information
        </div>
      )
    }
  }
  return <>{component()}</>
}
