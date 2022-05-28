import './App.css'
import { Header } from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { Comics } from './components/Comics/Comics'
import { connect } from 'react-redux'
import { actionCreatorComics } from './state/reducers/comics'
import { actionCreatorCharacters } from './state/reducers/characters'
import { CharactersContainer } from './components/Characters/CharactersContainer'

function App(props) {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/comics' element={<Comics />} />
          <Route
            path='/characters'
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
  }
}

const AppContainer = connect(mapStateToProps, mapDispathToProps)(App)

export default AppContainer
