import {setTimeout} from "timers";
import {AnyAction} from "redux";

export const CALL_API = "CALL_API"

const httpRequest = (method: string, endpoint: string, schema: ISchema) =>
    new Promise<ISchema>((resolve => {
    setTimeout(() => {
        resolve(schema)
    }, 1500)
}))
const middlewareApi = () => (next: any) => (action: IAppAction) => {
    const callApi = action[CALL_API]
    if (typeof callApi === "undefined") return next(action)
    if ("method" !in callApi) throw Error("Invalid call api type")

    const {method, endpoint, types} = callApi
    const [requestType, failedType, successType] = types
    const payload = action["payload"]
    if (typeof payload === "undefined") throw Error("Action payload does not perform.")

    const actionWith = (mAction: AnyAction & {payload?: any}) => {
        const output = Object.assign({}, action, mAction) // can add lodash for simplicity
        delete output[CALL_API]
        return output
    }
    next(actionWith({type: requestType}))
    return httpRequest(method, endpoint, payload).then(
        response => next(actionWith({type: successType, payload: response})),
        error => next(actionWith({type: failedType, payload: error}))
    )
}
export default middlewareApi