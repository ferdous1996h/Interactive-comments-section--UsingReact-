import SingleComment from '../components/SingleComment';
function ReplyThread({ replies, currentUser }) {
  if (!replies?.length) return null;
  return replies.map(reply => (
    <section className="replies" key={reply.id}>
      <SingleComment
        comment={reply}
        currentUser={currentUser}
      />
      <ReplyThread replies={reply.replies} currentUser={currentUser} />
    </section>
  ));
}
export default ReplyThread;
