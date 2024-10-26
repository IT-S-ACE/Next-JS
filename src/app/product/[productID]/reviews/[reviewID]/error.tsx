"use client";
interface Terror {
    error : Error
}

export default function ErrorBoundary({error}: Terror) {
    return <div>{error.message}</div>
};
