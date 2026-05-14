export default function SendMsg({ image, user, data, setData, scrollLast }) {
  function handleSendMSG(formData) {
    const msgData = formData.get('commentText');
    const newData = { ...data };
    const commentDataNEW = {
      id: JSON.stringify(new Date()),
      content: msgData,
      createdAt: new Date().toLocaleDateString(),
      score: 0,
      user: {
        image: newData.currentUser.image,
        username: user,
      },
    };
    newData.comments.push(commentDataNEW);
    setData(newData);
  }
  return (
    <section className="sendMSG">
      <form action={handleSendMSG}>
        <textarea
          name="commentText"
          id="commentTextID"
          className="sendMSG_TextArea"
        ></textarea>
        <div className="sendMSG_Bottom">
          <img src={image} alt="" />
          <button type="submit" onClick={scrollLast}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
