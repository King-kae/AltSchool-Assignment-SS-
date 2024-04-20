import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import RepoCard from "./RepoCard";
import RepoForm from "./RepoForm";

const RepoMain = ({ repos }) => {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);

  const reposPerPage = 6;

  const indexOfFirstRepo = (page - 1) * reposPerPage;
  const indexOfLastRepo = page * reposPerPage;
  const pageLength = Math.ceil(repos.length / reposPerPage);
  const filteredRepo = repos.filter((repo) => {
    return repo.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <>
      <main className="md:col-span-2">
        <RepoForm value={value} setValue={setValue} />
        <ul className="text-repoColor dark:text-[#d9cccc]">
          {filteredRepo.slice(indexOfFirstRepo, indexOfLastRepo).map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </ul>
        <div 
          className={`flex flex-col items-start gap-y-3  md:flex-row justify-between md:items-center py-8 border-t border-grey-100  dark:border-neutral-400 ${value ? "hidden" : ""
          }`}
        >
          <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
            <FaArrowCircleLeft />
          </button>
          <div className="">
            {Array.from({ length: pageLength }, (_, i) => i + 1).map((btn) => (
              <button
                key={`${btn}-i`}
                className={`${page === btn
                    ? "bg-gitGreen text-neutral-50"
                    : "bg-neutral-200 dark:bg-neutral-700"
                  }  px-3 transition-colors duration-300`}
                onClick={() => setPage(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
          <button
            disabled={page >= pageLength}
            onClick={() => setPage((p) => p + 1)}
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </main>
    </>
  );
};

export default RepoMain;
