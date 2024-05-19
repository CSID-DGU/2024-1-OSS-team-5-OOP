// BlockPage.js

import React from 'react';
import { useParams } from 'react-router-dom';

const BlockPage = () => {
  // URL에서 problemId 파라미터 값을 가져옵니다.
  const { problemId } = useParams();

  return (
    <div>
      {/* problemId 출력 */}
      <h2>Block Page - Problem ID: {problemId}</h2>
    </div>
  );
};

export default BlockPage;