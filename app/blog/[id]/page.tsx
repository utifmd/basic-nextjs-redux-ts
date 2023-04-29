type Props = {
    params: { id: string }
}
export default function Blog({params}: Props) {
    return (
        <div>
            <p className="text-3xl">Blog id: {params.id}</p>
        </div>
    )
}