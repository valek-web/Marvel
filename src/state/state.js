import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { comics_reducer } from './reducers/comics'
import { characters_reducer } from './reducers/characters'

let reducers = combineReducers({
  characters_reducer,
  comics_reducer,
})

let store = createStore(reducers, composeWithDevTools())

window.str = store

export default store
