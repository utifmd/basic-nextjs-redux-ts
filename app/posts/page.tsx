import {setTimeout} from "timers";

export default async function Posts() {
    const data = await new Promise<string>(((resolve, reject) => {
        setTimeout(() => { resolve("Pandeka") }, 1500)
    }))
    return (
        <div>
            <p className="text-3xl">Post page</p>
            <p className="text-sm">{data}</p>
        </div>
    )
}