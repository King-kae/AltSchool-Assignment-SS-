import { Link } from "react-router-dom";
import { useState } from "react";
// import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const RepoCard = ({ repo }) => {

  return (
    <>
      <li>
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg  sm:py-4 sm:flex flex-col gap-20 h-60 sm:items-center relative">
          <h3 className="text-lg text-black font-semibold">{repo.name}</h3>
          
            <p className="text-slate-500 font-medium">{repo.language}</p>
            <Link 
              to={`/repos/${repo.name}`}
              className="px-4 py-1 text-sm text-blue font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 absolute bottom-6"
            >
              View
            </Link>
          
        </div>
      </li>
    </>
  );
};

export default RepoCard;
