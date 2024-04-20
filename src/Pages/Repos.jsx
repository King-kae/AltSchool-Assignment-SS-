import useFetchUrl from "../hooks/useFetchUrl"
import { Outlet } from "react-router-dom"
import { SyncLoader } from "react-spinners";
import RepoMain from "../components/Repos/RepoMain";
import RepoHeader from "../components/Repos/RepoHeader";
// import Loader from "../utility/Loader";
const Loader = () => {
    return (
        <div className="h-[80vh] w-full  flex items-center justify-center">
            <SyncLoader margin={20} color="#000" />
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

    if (headerLoader || reposLoader) return <Loader />;

    // console.log({ headerData, reposData })

    return (
        <section className=' bg-white text-zinc-700 dark:bg-zinc-700 font-sans dark:text-neutral-200  after:content-[""] after:absolute after:w-full after:h-[50px] after:top-[29.25rem]  md:after:top-[6.3rem] after:left-0 after:border-b border-grey-100 dark:after:border-neutral-400'>
      <div className='repo-container md:grid  md:grid-cols-3 md:grid-rows-[auto_1fr] md:gap-x-8 '>
                <RepoHeader repoData={headerData} />
                <RepoMain repos={reposData} />
            </div>
            
            <Outlet />
        </section>

    )
}


export default Repos