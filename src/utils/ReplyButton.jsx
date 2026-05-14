export default function ReplyButton({ setReplyBack, id }) {
  return (
    <button
      className="commentReply"
      onClick={() => {

        setReplyBack(prev => ({ state: !prev.state, uniqueID: id }));
      }}
    >
      <img src="/public/images/icon-reply.svg" alt="" />
      <h3>Reply</h3>
    </button>
  );
}
