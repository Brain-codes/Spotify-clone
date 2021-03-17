import { SET_USER, SET_TOKEN, SET_PLAYLIST, SET_BILLBOARD } from './action'

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: "",
    token: "",
    billboard: null,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_PLAYLIST:
            return {
                ...state,
                playlists: action.playlists
            }

        case SET_BILLBOARD:
            return{
                ...state,
                billboard: action.billboard
            }
        default:
            return state
    }
}