import Link from "next/link"
export default function Product() {
    const productID = 100;
    return (
        <>
            <Link href='/'> Home</Link>
            <h1> Product Page</h1>
            <h1>
                <Link href='product/1'>Product 1</Link>
            </h1>
            <h1>
                <Link href='product/2'>Product 2</Link>
            </h1>
            <h1>
                <Link href='product/3'>Product 3</Link>
            </h1>
            <h1>
                <Link href={`product/${productID}`}>Product {productID}</Link>
            </h1>
        </>
    )
}