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
          className="w-28 aspect-square object-cover rounded-full ss:w-64"
          layoutId="entranceImg"
          ></motion.img>
          <div>
          <div>
            <h1 className='flex flex-col py-4'>
                <span className='text-[1.5rem] font-semibold'>{repoData.name}</span>
                <span>{repoData.login}</span>
            </h1>
          </div>
          <div className='space-y-3'>
            <h2 className='text-xl'>{repoData.bio}</h2>
            <div className='flex gap-x-4 items-center'>
                <CiMail className='text-xl' />
                <a href="mailto:kayode.raimi123@gmail.com" className="text-sm">kayode.raimi123@gmail.com</a>
            </div>
            <div className='flex gap-x-4 items-center'>
                <AiOutlineUsergroupAdd className='mt-[0.4rem] text-xl' />
                <p>
                    {repoData.followers} followers . {repoData.following} following
                </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default RepoHeader;