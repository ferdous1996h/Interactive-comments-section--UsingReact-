export function deleteByID(comments, matchID) {
  return comments
    .filter(comment => comment.id !== matchID)
    .map(comment => {
      if (comment.replies) {
        return {
          ...comment,
          replies: deleteByID(comment.replies, matchID),
        };
      }
      return comment;
    });
}
