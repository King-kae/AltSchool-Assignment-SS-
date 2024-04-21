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
        <ul className="text-repoColor dark:text-[#d9cccc] grid ss:grid-cols-2 gap-2">
          {filteredRepo.slice(indexOfFirstRepo, indexOfLastRepo).map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </ul>
        <div 
          className={`flex flex-row items-start gap-y-3  md:flex-row justify-between md:items-center py-8 ${value ? "hidden" : ""
          }`}
        >
          <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
            <FaArrowCircleLeft className="text-2xl hover:text-blue " />
          </button>
          <div className="rounded-lg border-solid border-4 border-blue">
            {Array.from({ length: pageLength }, (_, i) => i + 1).map((btn) => (
              <button
                key={`${btn}-i`}
                className={`hover:bg-blue ${page === btn
                    ? "bg-blue text-neutral-50"
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
            <FaArrowCircleRight className="text-2xl hover:text-blue " />
          </button>
        </div>
      </main>
    </>
  );
};

export default RepoMain;
