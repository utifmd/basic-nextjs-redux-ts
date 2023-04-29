interface ISchema {}

interface ICallApiAction {
    endpoint: string,
    schema: ISchema,
    types: [string, string, string]
}
interface IAppAction {
    [key: string]: ISchema | ICallApiAction
}