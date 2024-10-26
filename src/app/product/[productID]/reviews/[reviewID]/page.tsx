"use client"
import { notFound } from "next/navigation"
interface Tparams  {
    params: {
    productID : string,
    reviewID: string
    }
}

const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count)
}

export default function ReviewDetail({params}: Tparams) {
    if(parseInt(params.reviewID) > 1000){
        notFound();
    }
    const random = getRandomInt(2)
    if(random === 1 ) {
        throw new Error('Error Loading Review')
    }
    return(
        <h1>
            Review {params.reviewID} for product {params.productID}
        </h1>
    )
};
