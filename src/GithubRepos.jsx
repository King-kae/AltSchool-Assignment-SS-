import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
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
      </ErrorBoundary>
    </>
  );
}

export default GithubRepos;
