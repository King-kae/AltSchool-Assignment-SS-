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
            
        </>
    )
}