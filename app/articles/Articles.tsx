"use client"

type Props = {
    state: IArticleState
}
export default function Articles({state}: Props) {
    return (
        <div>
            <p className="text-3xl">Article page</p>
            <ul>{state.value.map(article =>
                <li key={article.id}>{article.title} | {article.content}</li>
            )}</ul>
        </div>
    )
}