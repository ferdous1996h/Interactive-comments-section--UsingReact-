const mutateNestedEdit = function (comments, id, info) {
  return comments.map(comment => {
    if (comment.id === id) {
      return {
        ...comment,
        content: info,
      };
    }
    if (comment?.replies?.length) {
      const nextReply = mutateNestedEdit(comment?.replies, id, info);
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
export default mutateNestedEdit;
