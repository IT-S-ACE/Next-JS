import { Metadata } from "next"

type TParams = {
    params: { productID: string }
}

export const generateMetadata = async ({ params }: TParams): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productID}`)
        }, 100);
    })
    return {
        title: `Product ${title}`,
    }
}

export default function ProductDetails({ params }: TParams) {
    return <h1>Details about Product {params.productID}</h1>
}