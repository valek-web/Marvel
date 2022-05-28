export const CharacterInfo = (props) => {
  const component = () => {
    if (!!props.info) {
      console.log(props)
      let element = props.info.comics.items.map((el, index) => {
        if (index >= 10) {
          return null
        }
        return <li className='info__element'>{el.name}</li>
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
