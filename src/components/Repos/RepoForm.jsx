import React from 'react';


const RepoForm = ({ value, setValue }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form className='mb-4 mt-4' onSubmit={handleSubmit}>
            <label htmlFor="search" className='sr-only'>
                Search Repositories
            </label>
            <input 
                type="text"
                name='search'
                id='search'
                placeholder='Search for a repository...'
                value={value}
                className='border border-grey-200 rounded-md w-[75%] md:w-[65%] px-2 py-1 text-zinc-700'
                onChange={(e) => setValue(e.target.value)} 
            />
            <button 
                type='submit'
                className='bg-blue text-neutral-50 ml-3 px-2 py-1 rounded-md text-sm md:text-lg'
            >
                {" "}
                Search
            </button>
        </form>
    )
        
    
}


export default RepoForm