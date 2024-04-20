import { useState } from "react"


const ErrorBoundary = () => {
    const [error, setError] = useState(false)

    if (error) {
        throw Error('Error thrown from ErrorBoundary')
    }
    return (
        <div  className='repo-container text-center flex items-center justify-center h-screen'>
            <button 
             className='font-playfair text-xl bg-zinc-700 text-neutral-50 dark:bg-yellow-400 dark:text-zinc-700 px-4 py-3 hover:bg-yellow-400 hover:text-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white duration-300 transition-colors'
             onClick={() => setError(true)}
            >
                Throw Error
            </button>
        </div>
    )
}

export default ErrorBoundary