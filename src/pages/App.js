import React from 'react'
import AllStoriesPage from './AllStoriesPage'
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toastify = (type, msg) => {

  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "warning":
      toast.warn(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "info":
      toast.info(msg);
      break;
    default:
      toast.info(msg);
      break;
  }
};

const App = () => {

  return (
  <Router>
    <ToastContainer
      autoClose={5000}
      hideProgressBar={true}
    />
    <Routes>
      <Route path="/" exact element={<AllStoriesPage />} />
      <Route path="/search_page" exact element={<SearchPage />} />
    </Routes>
  </Router>
  )
}

export default App
