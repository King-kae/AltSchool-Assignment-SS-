import { motion } from "framer-motion";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { CiMail } from "react-icons/ci";

const RepoHeader = ({ repoData }) => {
  return (
    <>
      <div className='aside md:h-screen '>
        <div className='flex gap-x-4 items-center  md:flex-col md:items-start'>
          <motion.img
          src={repoData.avatar_url}
          alt="King-kae profile"
          className="w-16 aspect-square object-cover rounded-full md:w-64"
          layoutId="entranceImg"
          ></motion.img>
          <div>
            <h1 className='flex flex-col py-4'>
                <span className='text-[1.5rem] font-semibold'>{repoData.name}</span>
                <span>{repoData.login}</span>
            </h1>
          </div>
          <div className='space-y-3 mt-8'>
            <h2 className='text-xl'>{repoData.bio}</h2>
            <div className='flex gap-x-4 items-center'>
                <CiMail className='mt-[0.4rem]' />
                <a href="mailto:kayode.raimi123@gmail.com">kayode.raimi123@gmail.com</a>
            </div>
            <div className='flex gap-x-4 items-center'>
                <AiOutlineUsergroupAdd className='mt-[0.4rem]' />
                <p>
                    {repoData.followers} followers . {repoData.following} following
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default RepoHeader;