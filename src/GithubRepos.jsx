import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import './index.css'
import App from "./App";
import Fallback from "./components/Fallback";

function GithubRepos() {
  const navigate = useNavigate();
  return (
    <>
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={() => {
          navigate("/");
        }}
      >
        <App />
        <Helmet>
          <title>Github Repos</title>
          <meta
            name="description"
            content="A simple app to display Github Repositories"
          />
        </Helmet>
      </ErrorBoundary>
    </>
  );
}

export default GithubRepos;
