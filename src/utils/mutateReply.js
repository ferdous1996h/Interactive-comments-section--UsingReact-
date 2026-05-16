export default function mutateReply(comments, targetID, updater) {
  const newComments = comments;
  for (const subComment of newComments) {
    if (subComment.id === targetID) {
      if (!subComment.replies) {
        subComment.replies = [];
      }
      subComment.replies.push(updater);
      return newComments;
    }
    if (subComment.replies?.length) {
      const found = mutateReply(subComment.replies, targetID, updater);
      if (found) return newComments;
    }
  }
  return false;
}
