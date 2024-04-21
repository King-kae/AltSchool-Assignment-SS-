import { Link } from "react-router-dom";
import { useState } from "react";
// import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const RepoCard = ({ repo }) => {

  return (
    <>
      <li className="transition duration-500 ease-in-out">
        <div className="py-8 px-8 max-w-sm mx-auto hover:shadow-inner bg-white rounded-xl shadow-lg group/item sm:py-4 sm:flex flex-col gap-20 h-60 sm:items-center relative transition duration-500 ease-in-out">
          <h3 className="text-lg text-black font-semibold">{repo.name}</h3>
          
            <p className="text-slate-500 font-medium absolute bottom-24">{repo.language}</p>
            <Link 
              to={`/repos/${repo.name}`}
              className="px-4 py-1 text-sm text-blue font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 absolute bottom-6 invisible group-hover/item:visible transition duration-500 ease-in-out"
            >
              View
            </Link>
          
        </div>
      </li>
    </>
  );
};

export default RepoCard;
