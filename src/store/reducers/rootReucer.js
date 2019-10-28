import wineReducer from './wineReducer'
import authReducer from './authReducer'
//import other reducers if theres any
import { firebaseReducer } from 'react-redux-firebase'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    //we can name the reducers by any name we want
    wine: wineReducer,
    auth: authReducer,
    firebase: firebaseReducer
})

export default rootReducer


