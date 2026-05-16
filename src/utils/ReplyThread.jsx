import SingleComment from '../components/SingleComment';
function ReplyThread({ replies, currentUser }) {
  if (!replies?.length) return null;

  return replies.map(reply => (
    <section className="replies" key={reply.id}>
      <SingleComment
        img={reply.user.image.png}
        username={reply.user.username}
        createdAt={reply.createdAt}
        content={reply.content}
        score={reply.score}
        currentUser={currentUser}
        id={reply.id}
      />
      <ReplyThread replies={reply.replies} currentUser={currentUser} />
    </section>
  ));
}
export default ReplyThread;
