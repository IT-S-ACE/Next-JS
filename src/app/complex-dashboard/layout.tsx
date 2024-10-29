type TLayout = {
    children : React.ReactNode,
    user : React.ReactNode,
    revenue : React.ReactNode,
    notification : React.ReactNode,
}

export default function ComplexDashboardLayout({
    children,
    user,
    revenue,
    notification
}:TLayout) {
    return(
        <>
        <div>{children}</div>
        <div style={{display: "flex"}}>
            <div style={{display:"flex", flexDirection: "column"}}>   
                <div>{user}</div>
                <div>{revenue}</div>
            </div>
            <div style={{display: "flex" , flex: 1}}>{notification}</div>
        </div>
        </>
    )
};
