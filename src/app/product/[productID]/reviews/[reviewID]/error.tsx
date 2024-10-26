"use client";
interface Terror {
    error : Error,
    reset: () => void,
}

export default function ErrorBoundary({error, reset}: Terror) {
    return <div>{error.message} <button onClick={reset}>Try Again</button></div>
};
