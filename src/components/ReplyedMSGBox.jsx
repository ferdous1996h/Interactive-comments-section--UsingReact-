
export default function ReplyedMSGBox({ handleReplyMSG, data }) {
  return (
    <div className="ReplyedMSGBox">
      <form action={handleReplyMSG}>
        <textarea
          name="commentText"
          id="commentTextID"
        ></textarea>
        <div className="sendMSG_Bottom">
          <img src={data.currentUser.image.png} alt="" />
          <button type="submit">Reply</button>
        </div>
      </form>
    </div>
  );
}
