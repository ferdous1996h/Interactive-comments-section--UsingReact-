export default function ReplyedMSGBox({ handleReplyMSG, currentUser }) {
  console.log(currentUser);
  return (
    <div className="ReplyedMSGBox">
      <form action={handleReplyMSG}>
        <textarea name="commentText" id="commentTextID"></textarea>
        <div className="sendMSG_Bottom">
          <img
            src={currentUser.image.png}
            alt={`${currentUser.username} avatar`}
          />
          <button type="submit">Reply</button>
        </div>
      </form>
    </div>
  );
}
