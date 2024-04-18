import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import useFetchUrl from "../hooks/useFetchUrl";

const Repo = () => {
  const params = useParams();

  const URL = `https://api.github.com/repos/King-kae/${params.name}`;
  const { data, isLoading } = useFetchUrl(URL, "repoData");
  if (isLoading) return <div>Loading...</div>;

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
    language,
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
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>{full_name}</h1>
          <p>{description}</p>
          <p>Visibility: {visibility}</p>
          <p>Language: {language}</p>
          <p>Forks: {forks_count}</p>
          <p>Stars: {stargazers_count}</p>
          <p>Watchers: {watchers_count}</p>
          <p>Created: {convertDate(created_at)}</p>
          <p>Updated: {convertDate(updated_at)}</p>
          <a href={html_url} target="_blank" rel="noreferrer">
            View on Github
          </a>
          {parent && (
            <p>
              Forked from{" "}
              <a href={parent.html_url} target="_blank" rel="noreferrer">
                {parent.full_name}
              </a>
            </p>
          )}
        </motion.div>
      </section>
    </>
  );
};
