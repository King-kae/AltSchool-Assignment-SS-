import React from 'react';


const RepoForm = ({ value, setValue }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">
                Search Repositories
            </label>
            <input 
                type="text"
                name='search'
                id='search'
                placeholder='Search for a repository...'
                value={value}
                onChange={(e) => setValue(e.target.value)} 
            />
            <button type='submit'>Search</button>
        </form>
    )
        
    
}


export default RepoForm