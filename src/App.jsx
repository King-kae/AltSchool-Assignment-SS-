import { Suspense, lazy } from 'react'
import { SyncLoader } from "react-spinners";
import { Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
const Home = lazy(() => import('./Pages/Home'))
const About = lazy(() => import('./Pages/About'))
const Repos = lazy(() => import('./Pages/Repos'))
const Repo = lazy(() => import('./Pages/Repo'))
const ErrorBoundary = lazy(() => import("./Pages/ErrorBoundary"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));
const Loader = () => {
  return (
    <div className="h-[80vh] w-full  flex items-center justify-center">
      <SyncLoader margin={20} color="#000" />
    </div>
  )
}
function App() {
  // const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Header />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/repos">
            <Route index element={<Repos />} />
            <Route path=':name' element={<Repo />} />
          </Route>
          <Route path="/errorboundary" element={<ErrorBoundary />} />
          <Route path="*" element={<ErrorPage />} />

        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
