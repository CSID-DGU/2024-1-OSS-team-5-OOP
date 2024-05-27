import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Header from './components/Header';
import TutorialPage from './pages/TutorialPage.js';
import TutorialDetailPage from './pages/TutorialDetailPage.js';
import ProblemPage from './pages/ProblemPage.js';
import BlockPage from './pages/BlockPage.js';
import QuizPage from './pages/QuizPage.js';
import SuggestionPage from './pages/SuggestionPage.js';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <audio src="/bgm.mp3" autoPlay loop />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/tutorial" />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/tutorial/:concept" element={<TutorialDetailPage />} />
          <Route path="/problems" element={<ProblemPage />} />
          <Route path="/problems/:conceptfilter" element={<ProblemPage />} />
          <Route path="/problems/block/:problemId" element={<BlockPage />} />
          <Route path="/problems/quiz/:problemId" element={<QuizPage />} />
          <Route path="/suggestion" element={<SuggestionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;