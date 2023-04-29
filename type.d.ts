interface ISchema {}

interface ICallApiAction {
    method: "post" | "get" | "put" | "patch" | "delete",
    endpoint: string,
    types: [string, string, string]
}
interface IAppAction {
    [key: string]: ISchema | ICallApiAction
}