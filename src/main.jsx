import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import GithubRepos from './GithubRepos.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <GithubRepos />
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
