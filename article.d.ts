interface IArticle {
    id: number,
    title: string,
    content: string
}
interface IArticleState {
    status: "idle" | "loading" | "error",
    value: IArticle[]
}
type TDispatchArticle = (state: IArticleState) => IArticleState