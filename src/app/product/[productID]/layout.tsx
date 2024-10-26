interface Tchildren {
    children: React.ReactNode
}


const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count)
}

export default function ProductDetailsLayout({children}:Tchildren) {

    const random = getRandomInt(2)
    if(random === 1 ) {
        throw new Error('Error Loading Product')
    }

    return(
        <>
        {children}
        <h2>Features products</h2>
        </>
    )
};
