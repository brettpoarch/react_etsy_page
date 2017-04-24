import { createStore } from 'redux'
import { etsyReducer } from './reducers/etsy'

const store = createStore(etsyReducer)

export default store