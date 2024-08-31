type TParams = {
    params : { productID : string }
}

export default function ProductDetails ( {params} : TParams ) {
    return <h1>Details about Product {params.productID}</h1>
}