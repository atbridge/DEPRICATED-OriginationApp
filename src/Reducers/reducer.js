import { combineReducers } from 'redux'
import creditAttributesReducer from './creditAttributesReducer'
import userReducer from './userReducer'
import decisionReducer from './decisionReducer'
import loadingReducer from './loadingReducer'

export default combineReducers({
    user:userReducer,
    creditAttributes:creditAttributesReducer,
    loading:loadingReducer,
    decision:decisionReducer
})