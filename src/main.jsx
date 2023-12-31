import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import detailsLoader from './detailsLoader.js';
import appliedJobsLoader from './appliedJobsLoader.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => appliedJobsLoader()
      },
      {
        path: "blog",
        element: <Blog></Blog>,
        loader: () => fetch("posts.json")
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => detailsLoader(params.id)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
