import { Link } from 'react-router-dom';
import { useSate } from 'react';



const RepoCard = ({ repo }) => {
    const [star, setStar] = useState(false)
    const handleStar = (e) => {
        if(+e.target.dataset.id === repo.id) {
            setStar((p) => !p)
        }
    }


    return (
        <>
            <li>
                <div>
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                    <div>
                        <p>{repo.language}</p>
                        <p>{repo.stargazers_count}</p>
                        <button data-id={repo.id} onClick={handleStar}>
                            {star ? "Unstar" : "Star"}
                        </button>
                        <Link to={`/repos/${repo.name}`}>View</Link>
                    </div>
                </div>
            </li>
        </>
    )
}