import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';

const middleware = [thunkMiddleware];

module.exports = function(initialState) {


  const store = createStore(reducers, initialState, compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers')
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return store;
}
