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
      <main>
        <RepoForm value={value} setValue={setValue} />
        <ul>
          {filteredRepo.slice(indexOfFirstRepo, indexOfLastRepo).map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </ul>
        <div>
          <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
            <FaArrowCircleLeft />
          </button>
          <div className="">
            {Array.from({ length: pageLength }, (_, i) => i + 1).map((btn) => (
              <button
                key={`${btn}-i`}
                className={`${
                  page === btn
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
