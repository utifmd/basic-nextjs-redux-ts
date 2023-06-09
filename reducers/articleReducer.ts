import {AnyAction, Reducer} from "redux";
import {ArticleActions} from "../actions/articleActions";

const initialState: IArticleState = {
    status: "idle", value: [
        {id: 0, title: "Krabby patty", content: "Aku akan selalu bersamamu"}
    ]
}
const reducer: Reducer<IArticleState> = (
    state: IArticleState = initialState, {type, payload}: AnyAction): IArticleState => {
    switch (type) {
        case ArticleActions.ADD_REQUEST:
            return {...state, status: "loading"}
        case ArticleActions.ADD_FAILED:
            return {...state, status: "error", value: payload}
        case ArticleActions.ADD_SUCCESS:
            return {...state, status: "idle", value: state.value.concat(payload)}
        default:
            return state
    }
}
export default reducer