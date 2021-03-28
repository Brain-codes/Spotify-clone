import { SET_USER, SET_TOKEN, SET_PLAYLIST, SET_BILLBOARD, SET_ALLPLAYLIST } from './action'

export const initialState = {
    user: null,
    playlists: [],
    allPlaylists: [],
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

        case SET_ALLPLAYLIST:
            return{
                ...state,
                allplaylists: action.allplaylists
            }
        default:
            return state
    }
}