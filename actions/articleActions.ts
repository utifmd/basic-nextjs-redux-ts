import {AppDispatch, AppState} from "../store";
import {AnyAction} from "redux";

export const addArticle = (article: IArticle) =>
    (dispatch: AppDispatch, getState: AppState): AppDispatch => {
    const action: AnyAction = {
        type: ArticleActions.ADD_SUCCESS, payload: article
    }
    return dispatch(action)
}
export enum ArticleActions {
    ADD_REQUEST = "@@ARTICLE_ADD_REQUEST",
    ADD_FAILED = "@@ARTICLE_ADD_FAILED",
    ADD_SUCCESS = "@@ARTICLE_ADD_SUCCESS",

    REMOVE_REQUEST = "@@ARTICLE_REMOVE_REQUEST",
    REMOVE_FAILED = "@@ARTICLE_REMOVE_FAILED",
    REMOVE_SUCCESS = "@@ARTICLE_REMOVE_SUCCESS",
}