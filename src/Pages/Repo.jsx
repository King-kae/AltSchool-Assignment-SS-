import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import useFetchUrl from "../hooks/useFetchUrl";
import octocat from "../assets/Octocat-removebg-preview.png"
import { SyncLoader } from "react-spinners";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import RepoIcon from "../components/RepoIcon";


const Loader = () => {
  return (
    <div className="h-[80vh] w-full  flex items-center justify-center">
      <SyncLoader margin={20} color="#000" />
    </div>
  )
}

const Repo = () => {
  const params = useParams();

  const URL = `https://api.github.com/repos/King-kae/${params.name}`;
  const { data, isLoading } = useFetchUrl(URL, "repoData");
  if (isLoading) return <div><Loader /></div>;

  const {
    full_name,
    visibility,
    description,
    html_url,
    created_at,
    updated_at,
    forks_count,
    stargazers_count,
    watchers_count,
    languages,
    parent,
  } = data;

  const convertDate = (date) => {
    const [weekDay, month, day, year, time] = new Date(date)
      .toString()
      .split(" ");
    return `${weekDay}, ${month} ${day}, ${year} at ${time}`;
  };

  return (
    <>
      <section className='dark:text-neutral-50 text-zinc-700 dark:bg-zinc-700'>
        <div className='repo-container py-6 md:py-12'>
          <div className='flex flex-col md:flex-row gap-4 md:px-4 px-6 justify-between'>
            <div className='mt-8 md:w-1/3  '>
              <motion.img
                src={octocat}
                alt='github repo octocat'
                className='w-full object-cover aspect-square md:mt-8'
                layoutId='entranceImg'
              />
            </div>

            <div className='md:w-2/3 mt-4'>
              <div>
                <div className='flex items-center gap-x-2'>
                  <RepoIcon />{" "}
                  <h1 className='text-xl md:text-2xl text-sky-500'>
                    {full_name}
                  </h1>
                  <p className='text-repoColor text-xs px-[0.4375rem] leading-[1.125rem] border border-grey-100 capitalize rounded-3xl'>
                    {visibility}
                  </p>
                </div>
                {parent ? (
                  <p className='text-xs'> {parent.full_name} </p>
                ) : null}
              </div>

              <div className='space-y-4 mt-8'>
                <p className='text-lg'>Created on {convertDate(created_at)}</p>
                <p>Updated on {convertDate(updated_at)}</p>
                <p className='leading-[1.625rem] max-w-3xl'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis nobis accusamus omnis ex exercitationem perspiciatis
                  repellat vitae animi incidunt culpa numquam, eius asperiores
                  ipsa rerum. Ipsa veniam doloremque dolorum architecto? Amet
                  odit illum ab in, doloremque ullam, tenetur illo eos quaerat
                  dicta quis facere, natus aspernatur beatae dolorem quod dolor
                  reiciendis unde. Eaque, consectetur nisi quibusdam atque
                  quisquam deserunt. Quam!
                </p>
                <div className='flex gap-2 items-center'>
                  <p className='flex gap-x-2 items-center  text-xl md:text-2xl'>
                    <span className=''>
                      <AiOutlineStar />
                    </span>
                    <span className='text-xl md:text-xl'>
                      {parent ? parent.stargazers_count : stargazers_count}
                    </span>
                  </p>
                  <p className='flex gap-x-2 items-center  text-xl md:text-2xl'>
                    <span className=''>
                      <FiEye />
                    </span>
                    <span className='text-xl md:text-xl'>
                      {parent ? parent.watchers_count : watchers_count}
                    </span>
                  </p>
                  <p className='flex gap-x-2 items-center  text-xl md:text-2xl'>
                    <span className=''>
                      <BiGitRepoForked />
                    </span>
                    <span className='text-xl md:text-xl'>
                      {parent ? parent.forks_count : forks_count}
                    </span>
                  </p>
                  <p>{languages}</p>
                </div>
              </div>

              <div className='mt-4'>
                <a
                  href={html_url}
                  className='block w-32 text-lg rounded-full border text-center py-2 focus:ring-blue  text-blue border-blue hover:text-white hover:bg-blue transition-all duration-300'
                  target='_blank'
                >
                  Visit Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Repo;
