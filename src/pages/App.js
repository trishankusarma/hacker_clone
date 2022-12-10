import React from 'react'
import AllStoriesPage from './AllStoriesPage'
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<AllStoriesPage />} />
      <Route exact path="/search_page" element={<SearchPage />} />
    </Routes>
  </Router>
  )
}

export default App
