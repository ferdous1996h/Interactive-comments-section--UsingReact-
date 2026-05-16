import mutateLikeCount from '../utils/mutateLikeCount';
export default function LikeCounter({ score, setData, id }) {
  function updateScore(info) {
    if (info < 0) return;
    setData(prev => {
      const newComment = mutateLikeCount(prev.comments, id, info);
      return {
        ...prev,
        comments: newComment,
      };
    });
  }
  return (
    <div className="reactionCount">
      <button
        className="reaction_minus"
        aria-label="decrease score"
        onClick={() => updateScore(score - 1)}
      >
        <img src="/images/icon-minus.svg" alt="" />
      </button>
      {score}
      <button
        className="reaction_plus"
        aria-label="Increase score"
        onClick={() => updateScore(score + 1)}
      >
        <img src="/images/icon-plus.svg" alt="" />
      </button>
    </div>
  );
}
