import { combineReducers } from 'redux'
export const referenceReducer = (state = 1, action) => state

let StoreContainer = combineReducers({
    referenceReducer
})

export default StoreContainer;