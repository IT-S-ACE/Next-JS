import { Metadata } from "next"

export const metadata : Metadata = {
    // title: 'Blog' // will be replaced with (%s) and showed (Blog | Codevolution)
    title: {
        absolute : 'Blog' // will  display in the title only Blog without the rest of the title from the layout (| Codevolution)
    }
}

export default function Blog () {
    return <h1>Blog Page</h1>
}