import { useState } from "react"


const ErrorBoundary = () => {
    const [error, setError] = useState(false)

    if (error) {
        throw Error('Error thrown from ErrorBoundary')
    }
    return (
        <div  className='repo-container text-center flex items-center justify-center h-screen'>
            <button 
             className='font-playfair text-xl bg-blue rounded-full text-neutral-50 px-4 py-3 hover:bg-white hover:text-blue duration-300 transition-colors'
             onClick={() => setError(true)}
            >
                Throw Error
            </button>
        </div>
    )
}

export default ErrorBoundary