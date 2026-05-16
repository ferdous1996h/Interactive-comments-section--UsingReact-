export default function mutateReply(comments, targetID, updater) {
  return comments.map(comment => {
    if (comment.id === targetID) {
      return {
        ...comment,
        replies: [...(comment.replies || []), updater],
      };
    } else if (comment?.replies?.length) {
      const nextReply = mutateReply(comment?.replies, targetID, updater);
      if (nextReply !== comment?.replies) {
        return {
          ...comment,
          replies: nextReply,
        };
      }
    }
    return comment;
  });
}
