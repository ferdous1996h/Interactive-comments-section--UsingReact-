export default function SendMsg({ image, user, data, setData, scrollLast }) {
  function handleSendMSG(formData) {
    const msgData = formData.get('commentText').toString().trim();
    if (!msgData) return;
    const commentDataNEW = {
      id: crypto.randomUUID(),
      content: msgData,
      createdAt: new Date().toLocaleDateString(),
      score: 0,
      user: {
        image: data.currentUser.image,
        username: user,
      },
    };
    setData(prev => {
      const newComments = [...prev.comments, commentDataNEW];
      return {
        ...prev,
        comments: newComments,
      };
    });
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
          <img src={image} alt={`${user} avatar`} />
          <button type="submit" onClick={scrollLast}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
