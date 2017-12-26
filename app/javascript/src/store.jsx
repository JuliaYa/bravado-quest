import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import reducer from './rootReducer';

export default (initialState) => {
  const composedStore = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  const storeCreator = composedStore(createStore);
  const store = storeCreator(reducer, initialState);

  return store;
}