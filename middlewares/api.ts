import {setTimeout} from "timers";
import {AnyAction} from "redux";

export const CALL_API = "CALL_API"

const httpRequest = (params: ISchema) =>
    new Promise<ISchema>((resolve => {
        setTimeout(() => {
            resolve(params)
        }, 1500)
    }))
const middlewareApi = () => (next: any) => (action: IAppAction | AnyAction) => {
    const callApi = action[CALL_API]
    if (typeof callApi === "undefined")
        return next(action)

    const {types} = callApi
    const [requestType, failedType, successType] = types
    const payload = action["payload"]
    if (typeof payload === "undefined")
        throw Error("Action payload does not perform.")

    const actionWith = (data: AnyAction) => {
        const mAction = Object.assign({}, action, data)
        delete mAction[CALL_API]
        return mAction
    }
    actionWith({type: requestType})
    return httpRequest(payload).then(
        response => next(actionWith({type: successType, payload: response})),
        error => next(actionWith({type: failedType, payload: error}))
    )
}
export default middlewareApi