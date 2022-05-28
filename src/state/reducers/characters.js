const SET_CHARACTERS = 'MARVEL/comics/SET_CHARACTERS'

let initialState = {
  characters: null,
}

export const characters_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: [action.new_characters],
      }
    default:
      return state
  }
}

// Action Creator

export let actionCreatorCharacters = {
  setCharacters: (new_characters) => {
    return {
      type: SET_CHARACTERS,
      new_characters,
    }
  },
}
