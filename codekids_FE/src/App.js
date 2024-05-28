import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Header from './components/Header';
import TutorialPage from './pages/TutorialPage.js';
import TutorialDetailPage from './pages/TutorialDetailPage.js';
import ProblemPage from './pages/ProblemPage.js';
import BlockPage from './pages/BlockPage.js';
import CodePage from './pages/CodePage.js';
import SuggestionPage from './pages/SuggestionPage.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/tutorial" />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/tutorial/:concept" element={<TutorialDetailPage />} />
          <Route path="/problems" element={<ProblemPage />} />
          <Route path="/problems/block/:problemId" element={<BlockPage />} />
          <Route path="/problems/code/:problemId" element={<CodePage />} />
          <Route path="/suggestion" element={<SuggestionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
