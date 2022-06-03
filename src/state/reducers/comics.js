const SET_COMICS = 'MARVEL/comics/SET_COMMICS'
const SET_COMIC_INFO = 'MARVEL/comics/SET_COMIC_INFO'

let initialState = {
  comics: null,
  comicInfo: null,
}

export const comics_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMICS:
      return {
        ...state,
        comics: [action.new_comics],
      }
    case SET_COMIC_INFO:
      return {
        ...state,
        comicInfo: [action.info],
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
  getComicInfo: (info) => {
    return {
      type: SET_COMIC_INFO,
      info,
    }
  },
}
