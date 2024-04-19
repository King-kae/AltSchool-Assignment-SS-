import { motion } from "framer-motion";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { CiMail } from "react-icons/ci";

const RepoHeader = ({ repoData }) => {
  return (
    <>
      <div>
        <div>
          <motion.img
          src={repoData.avatar_url}
          alt="King-kae profile"
          className=""
          ></motion.img>
          <div>
            <h1>
                <span>{repoData.name}</span>
                <span>{repoData.login}</span>
            </h1>
          </div>
          <div>
            <h2>{repoData.bio}</h2>
            <div>
                <CiMail />
                <a href="mailto:kayode.raimi123@gmail.com">kayode.raimi123@gmail.com</a>
            </div>
            <div>
                <AiOutlineUsergroupAdd />
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