import { EditContext } from '../contexts/EditContext';
import { useContext } from 'react';
import mutateNestedEdit from '../utils/mutateNestedEdit';
export default function EditReply({ replyData, setEditCommentID }) {
  const { user, createdAt, content, id } = replyData;
  const { data, setData } = useContext(EditContext);

  function handleEditREPLY(formData) {
    const formBoxInfo = formData.get('commentText');
    setData(prev => {
      const newEditComment = mutateNestedEdit(data.comments, id, formBoxInfo);
      return {
        ...prev,
        comments: newEditComment,
      };
    });
    setEditCommentID(null);
  }
  return (
    <section className="single_Comment-Wrapper">
      <div className="single_Comment">
        <header className="comment__Header">
          <img src={user.image.png} alt="" />
          <h4>{user.username}</h4>
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
