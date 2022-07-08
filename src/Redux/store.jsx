import { createStore } from "redux";
import rootReducers from "./Reducer/index";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage
};
const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;



  