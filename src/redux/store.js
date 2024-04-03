import {createStore, applyMiddleware} from "redux"
import {thunk} from 'redux-thunk'
import rootReducer from "./reduces"
import {composeWithDevTools} from "@redux-devtools/extension"
import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./reducers/productSlice"
import authenticateReducer from "./reduces/authenticateReducer"

// let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
    reducer : {
        auth : authenticateReducer, 
        product : productSlice,
    }
})
export default store

