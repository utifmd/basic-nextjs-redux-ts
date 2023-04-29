import {setTimeout} from "timers";
import BlogItem from "./BlogItem"

export default async function Blog() {
    const data = await new Promise<string[]>(((resolve, reject) => {
        setTimeout(() => {
            resolve(["Pandeka piliang", "alber sitorus chaniago"])
        }, 1500)
    }))
    return (
        <div>
            <p className="text-3xl">Blog page</p>
            <br/>
            <ul className="space-y-2">
                {data.map((item, key) =>
                    <li key={key} className="text-sm">
                        <BlogItem full_name={item}/>
                    </li>
                )}
            </ul>
        </div>
    )
}