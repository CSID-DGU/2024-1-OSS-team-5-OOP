import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Header from './components/Header';
import TutorialPage from './pages/TutorialPage.js';
import TutorialDetailPage from './pages/TutorialDetailPage.js';
import ProblemPage from './pages/ProblemPage.js';
import BlockPage from './pages/BlockPage.js';
import NextBlockPage from './pages/NextBlockPage.js';
import FinalBlockPage from './pages/FinalBlockPage.js';
import QuizPage from './pages/QuizPage.js';
import QuizCheckPage from './pages/QuizCheckPage.js';

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
          <Route path="/problems/:concept" element={<ProblemPage />} />
          <Route path="/problems/block/:problemId" element={<BlockPage />} />
          <Route path="/problems/block/:problemId/next/final/quiz" element={<QuizPage />} />
          <Route path="/problems/block/:problemId/next/final/quiz/check" element={<QuizCheckPage />} />
          <Route path="/problems/block/:problemId/next" element={<NextBlockPage />} />
          <Route path="/problems/block/:problemId/next/final" element={<FinalBlockPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;