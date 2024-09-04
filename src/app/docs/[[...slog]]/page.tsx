type Tparams = {
    params: {
        slog: string[]; 
    }
}

export default function Docs({params}: Tparams) {
    if(params.slog?.length === 2) {
        console.log(params.slog)
        return <h1>Viewing Docs for the feature {params.slog[0]} and concept {params.slog[1]}</h1>
    }else if(params.slog?.length === 1) {
        console.log(params.slog)
        return <h1>Viewing Docs for the feature {params.slog[0]}</h1>
    }
    return <h1>Docs Home Page {params.slog}</h1>
};


// OR write it like this

// type Tparams = {
//     params: {
//         slog?: string[]; // Make slog optional to handle undefined cases
//     }
// }

// export default function Docs({ params }: Tparams) {
//     const slog = params.slog;

//     if (slog && slog.length === 2) {
//         console.log(slog);
//         return <h1>Viewing Docs for the feature {slog[0]} and concept {slog[1]}</h1>;
//     } else if (slog && slog.length === 1) {
//         console.log(slog);
//         return <h1>Viewing Docs for the feature {slog[0]}</h1>;
//     }

//     return <h1>Docs Home Page</h1>;
// }
