const mutateLikeCount = function (comments, id, count) {
  return comments.map(comment => {
    if (comment.id === id) {
      return {
        ...comment,
        score: Math.max(count, 0),
      };
    }
    if (comment?.replies?.length) {
      const nextReply = mutateLikeCount(comment.replies, id, count);
      if (nextReply !== comment?.replies) {
        return {
          ...comment,
          replies: nextReply,
        };
      }
    }
    return comment;
  });
};
export default mutateLikeCount;
