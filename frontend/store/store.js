import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/root_reducer";

// for testing env
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = (preloadedState = {}) => {    
  // store for prod  
  //return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

  // store for testing
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );

}

export default configureStore;
