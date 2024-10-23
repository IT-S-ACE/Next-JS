import { useRouter } from "next/router"

export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        console.log("Placing your order")
        router.push('/') // redirect to the home page by add it to the routes history
        // router.replace('/') // do as like the replace in Link component
        // router.back() // redirect back to the previous page
        // router.forward() // go to the next page
    }

    return(
        <>
            <h1>Order product</h1>
            <button onClick={handleClick}> Place Order</button>
        </>
    )
};
