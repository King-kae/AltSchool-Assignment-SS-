import {  Suspense, lazy } from 'react'
import './App.css'
import { SyncLoader } from "react-spinners";
import { Route, Routes } from "react-router-dom";
// import Loader from "./utility/Loader";

const Home = lazy(() => import('./Pages/Home'))
const Repos = lazy(() => import('./Pages/Repos'))
const Repo = lazy(() => import('./Pages/Repo'))
const ErrorBoundary = lazy(() => import("./Pages/ErrorBoundary"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));
const Loader = () => {
  return(
      <div className="loader">
          <SyncLoader color="#000" />
      </div>
  )
}
function App() {
  
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/repos">
          <Route index element={<Repos />} />
          <Route path=':name' element={<Repo />} />
        </Route>
        <Route path="/errorboundary" element={<ErrorBoundary />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
