import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import filterReducer from './reducers/filters'
import pizzasReducer from './reducers/pizzas'
import cartReducer from './reducers/cart'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    filter: filterReducer,
    pizzas: pizzasReducer,
    cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

window.store = store
export default store