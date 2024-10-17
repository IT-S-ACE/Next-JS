import { notFound } from "next/navigation"
interface Tparams  {
    params: {
    productID : string,
    reviewID: string
    }
}

export default function ReviewDetail({params}: Tparams) {
    if(parseInt(params.reviewID) > 1000){
        notFound();
    }
    return(
        <h1>
            Review {params.reviewID} for product {params.productID}
        </h1>
    )
};
