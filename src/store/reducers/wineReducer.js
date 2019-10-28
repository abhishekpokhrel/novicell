import { defaultCipherList } from "constants";

const initState = {
    wines: [
        {id: 1, name: 'first wine', year: '1111', vineyard: 'france', description: 'this is the best wine you can get'},
        {id: 2, name: 'second wine', year: '2222', vineyard: 'italy', description: 'this is the okay wine you can get'},
        {id: 3, name: 'third wine', year: '3333', vineyard: 'spain', description: 'this is the good wine you can get'}
    ]
}

const wineReducer = ( state = initState, action) => {

    switch (action.type) {
        case 'CREATE_WINE':
            console.log('created wine', action.wine)
            return state;
        case 'CREATE_WINE_ERROR':
            console.log('create wine error', action.e)
            return state;
        case 'ADD_COMMENT':
            console.log('addded comment', action.comment)
            return state;
        case 'ADD_COMMENT_ERROR':
            console.log('create wine error', action.e)
            return state;
        case 'DELETE_WINE':
            console.log('deleted wine', action.id)
            return state;
        default:
            return state;
    }
}

export default wineReducer