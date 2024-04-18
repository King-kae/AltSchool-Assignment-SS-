import useFetchUrl from "../hooks/useFetchUrl"
import { Outlet } from "react-router-dom"
// import Loader from "../utility/Loader";

const Repos = () => {
    const { data: headerData, isLoading: headerLoader } = useFetchUrl(
        "https://api.github.com/users/King-kae",
        "headerData"
    );
    const { data: reposData, isLoading: reposLoader } = useFetchUrl(
        "https://api.github.com/users/King-kae/repos",
        "reposData"
    );
    
    if( headerLoader || reposLoader ) return <Loader />;

    console.log({ headerData, reposData })

    return (
        <div>
            <h1>{headerData.name}</h1>
            <img src={headerData.avatar_url} alt={headerData.name} />
            <h2>Repositories</h2>
            <ul>
                {reposData.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
            <Outlet />
        </div>

    )
}


export default Repos