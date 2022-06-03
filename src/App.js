import './App.css'
import { Header } from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreatorComics } from './state/reducers/comics'
import { actionCreatorCharacters } from './state/reducers/characters'
import { CharactersContainer } from './components/Characters/CharactersContainer'
import { ComicsContainer } from './components/Comics/ComicsContainer'
import { ComicsInfo } from './components/Comics/ComicsInfo'

function App(props) {
  return (
    <>
      <Header />
      <main className='page'>
        <Routes>
          <Route
            path='comics'
            element={
              <ComicsContainer
                comics={props.comics}
                getComics={props.getComics}
              />
            }
          />
          <Route
            path='comics/:id'
            element={
              <ComicsInfo
                comicsInfo={props.comicsInfo}
                setComicInfo={props.setComicInfo}
              />
            }
          />
          <Route
            path='/characters'
            element={
              <CharactersContainer
                characters={props.characters}
                getCharacters={props.getCharacters}
              />
            }
          />
          <Route
            path='/characters/:id'
            element={
              <CharactersContainer
                characters={props.characters}
                getCharacters={props.getCharacters}
              />
            }
          />
        </Routes>
      </main>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    comics: state.comics_reducer.comics,
    comicsInfo: state.comics_reducer.comicInfo,
    characters: state.characters_reducer.characters,
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getCharacters: (characters) => {
      dispatch(actionCreatorCharacters.setCharacters(characters))
    },
    getComics: (comics) => {
      dispatch(actionCreatorComics.getComics(comics))
    },
    setComicInfo: (info) => {
      dispatch(actionCreatorComics.getComicInfo(info))
    },
  }
}

const AppContainer = connect(mapStateToProps, mapDispathToProps)(App)

export default AppContainer
