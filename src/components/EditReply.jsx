import { EditContext } from '../contexts/EditContext';
import { useContext } from 'react';

export default function EditReply({
  img,
  username,
  createdAt,
  content,
  id,
  setEditCommentID,
}) {
  const { data, setData } = useContext(EditContext);
  const mutateNestedEdit = function (comments, id, info) {
    for (const comment of comments) {
      if (comment.id === id) {
        comment.content = info;
        return true;
      }
      if (comment?.replies?.length) {
        const found = mutateNestedEdit(comment?.replies, id, info);
        if (found) return true;
      }
    }
    return false;
  };

  function handleEditREPLY(formData) {
    const formBoxInfo = formData.get('commentText');
    console.log(formBoxInfo);
    const newData = { ...data };
    mutateNestedEdit(newData.comments, id, formBoxInfo);
    setData(newData);
    setEditCommentID(null);
    console.log(data);
  }
  return (
    <section className="single_Comment-Wrapper">
      <div className="single_Comment">
        <header className="comment__Header">
          <img src={img} alt="" />
          <h4>{username}</h4>
          <p>{createdAt}</p>
        </header>
        <div className="editReplyWrapper">
          <form action={handleEditREPLY}>
            <textarea
              name="commentText"
              id="commentTextID"
              defaultValue={content}
            ></textarea>
            <button type="submit" className="updateComment">
              Update
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
