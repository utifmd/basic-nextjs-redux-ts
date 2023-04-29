import Link from "next/link";
type Props = {
    full_name: string
}
const BlogItem = ({full_name}: Props) => {
    return(
        <Link href={`/blog/${full_name}`}>{full_name}</Link>
    )
}
export default BlogItem