"use client"

import {useEffect, useState} from "react";

type Props = {
    state: IArticleState,
    addArticle: (article: IArticle) => TDispatchArticle
}
export default function Articles({state, addArticle}: Props) {
    const [nextId, setNextId] = useState<number>(0)
    const onSavePressed = (e: MouseEvent) => {
        e.preventDefault()
        const article: IArticle = {
            id: nextId,
            content: `Habibie yaa Muhammad!`,
            title: `Article number (${nextId}) `
        }
        addArticle(article)
    }
    useEffect(() => {
        const lastId = state.value.reduce((acc, current) => {
            return Math.max(current.id, acc)
        }, 0) + 1
        setNextId(lastId)
    }, [state.value])
    return (
        <div>
            <span className="text-3xl">Article page</span>
            <button className="px-5 mx-5 hover:bg-gray-100 hover:text-gray-600" onClick={onSavePressed}>Save id {nextId}</button>
            <ul>{state.value.map(article =>
                <li key={article.id}>{article.title} | {article.content}</li>
            )}</ul>
        </div>
    )
}