import { createStore } from 'redux'
import bugLogReducer from './reducer'

const store = createStore(bugLogReducer);

export default store;