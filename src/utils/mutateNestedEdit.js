const mutateNestedEdit = function (comments, id, info) {
  const newComment = comments;
  for (const comment of newComment) {
    if (comment.id === id) {
      comment.content = info;
      return newComment;
    }
    if (comment?.replies?.length) {
      const found = mutateNestedEdit(comment?.replies, id, info);
      if (found) return newComment;
    }
  }
  return false;
};
export default mutateNestedEdit;
