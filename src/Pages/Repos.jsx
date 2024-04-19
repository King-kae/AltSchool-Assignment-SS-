import useFetchUrl from "../hooks/useFetchUrl"
import { Outlet } from "react-router-dom"
import { SyncLoader } from "react-spinners";
import RepoMain from "../components/Repos/RepoMain";
import RepoHeader from "../components/Repos/RepoHeader";
// import Loader from "../utility/Loader";
const Loader = () => {
    return(
        <div className="loader">
            <SyncLoader color="#000" />
        </div>
    )
  }
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

    // console.log({ headerData, reposData })

    return (
        <section>
            <div>
                <RepoHeader repoData={headerData} />
                <RepoMain repos={reposData} />
                {/* <h2>{headerData.login}</h2> */}
                {/* <p>{reposData.map((repo) => {
                    return (
                        <li key={repo.id}>
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                            <div>
                                <p>{repo.language}</p>
                                <p>{repo.stargazers_count}</p>
                            </div>
                        </li>
                    )
                })}</p> */}
            </div>
            <Outlet />
        </section>

    )
}


export default Repos