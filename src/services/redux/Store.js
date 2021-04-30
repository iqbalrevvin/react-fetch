import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import reducer from './reducers'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['loading'],
    whitelist: ['']
}

const persistedReducer = persistReducer(persistConfig, reducer)


const Store = createStore(persistedReducer, applyMiddleware(thunk))
const Persistor = persistStore(Store)

export {Store, Persistor}