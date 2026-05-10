import { useState } from 'react';

export default function LikeCounter({ score }) {
  const [likeCount, setLikeCount] = useState(score);
  return (
    <div className="reactionCount">
      <button
        className="reaction_minus"
        onClick={() => setLikeCount(prev => Math.max(prev - 1, 0))}
      >
        <img src="/images/icon-minus.svg" alt="" />
      </button>
      {likeCount}
      <button
        className="reaction_plus"
        onClick={() => setLikeCount(prev => prev + 1)}
      >
        <img src="/public/images/icon-plus.svg" alt="" />
      </button>
    </div>
  );
}
