// TutorialDetailPage.js

import React from 'react';
import { useParams } from 'react-router-dom';

const TutorialDetailPage = () => {
  // URL에서 concept 파라미터 값을 가져옵니다.
  const { concept } = useParams();

  return (
    <div>
      <h2>{concept}</h2>
    </div>
  );
};

export default TutorialDetailPage;
