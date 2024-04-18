import { useState } from "react"


const ErrorBoundary = () => {
    const [error, setError] = useState(false)

    if (error) {
        return <h1>Something went wrong</h1>
    }
    return (
        <div>
            <button onClick={() => setError(true)}>Throw Error</button>
        </div>
    )
}

export default ErrorBoundary