import { SET_USER, SET_TOKEN, SET_PLAYLIST } from './action'

export const initialState = {
    user: '',
    playlists: [],
    playing: false,
    item: "",
    token: 'BQA2Iqcm4W8V_OQtmjYoTyfT4B0q92GJnlz-SQkhqEtxZ-H9NRltntWEv2gh9AZWc4f-VMKGNVRVFOEeMaLwkUYGKDklhO4qjbSyu8C7cufZVvaj62y34Txg9G89UXvHwWWoNG-TumtuGrRKwDXKxxu97OzWFhgd5kaDMNJGk9E5ov-JMwB3'
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
        default:
            return state
    }
}