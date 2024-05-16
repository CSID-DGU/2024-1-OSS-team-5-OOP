import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from './components/Header';
import TutorialPage from './pages/TutorialPage.js';
import ProblemPage from './pages/ProblemPage.js';
import SuggestionPage from './pages/SuggestionPage.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/problems" element={<ProblemPage />} />
          <Route path="/suggestion" element={<SuggestionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
