
import {thunk,withExtraArgument} from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer/combinedReducer';

const middleware=[thunk];

const Store = createStore(
    reducer,
    applyMiddleware(...middleware)
  )
  

export default Store
