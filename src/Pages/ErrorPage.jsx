import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/home">Go Back</Link>
        </div>
    )
}

export default ErrorPage