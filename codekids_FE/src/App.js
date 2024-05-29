import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Header from './components/Header';
import TutorialPage from './pages/TutorialPage.js';
import TutorialDetailPage from './pages/TutorialDetailPage.js';
import ProblemPage from './pages/ProblemPage.js';
import BlockPage from './pages/BlockPage.js';
import BlockPage2 from './pages/BlockPage2.js';
import BlockPage3 from './pages/BlockPage3.js';
import QuizPage from './pages/QuizPage.js';

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
          <Route path="/problems/:concept" element={<ProblemPage />} />
          <Route path="/problems/block/:problemId" element={<BlockPage />} />
          <Route path="/problems/block/:problemId/2/3/quiz" element={<QuizPage />} />
          <Route path="/problems/block/:problemId/2" element={<BlockPage2 />} />
          <Route path="/problems/block/:problemId/2/3" element={<BlockPage3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;