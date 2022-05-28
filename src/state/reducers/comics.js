const SET_COMICS = 'MARVEL/comics/SET_COMMICS'

let initialState = {
  comics: null,
}

export const comics_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMICS:
      return {
        ...state,
        comics: [action.new_comics],
      }
    default:
      return state
  }
}

// Action Creator

export let actionCreatorComics = {
  getComics: (new_comics) => {
    return {
      type: SET_COMICS,
      new_comics,
    }
  },
}
