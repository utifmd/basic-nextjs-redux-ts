import {Store} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk"

import api from "../middlewares/api"
import articleReducer from "../reducers/articleReducer"

const store: Store<IArticleState, TDispatchArticle> & {
    dispatch: TDispatchArticle
} = configureStore({
    reducer: articleReducer,
    middleware: [thunk, api]
})
export type AppState = typeof store.getState
export type AppDispatch = ReturnType<typeof store.dispatch>
export default store