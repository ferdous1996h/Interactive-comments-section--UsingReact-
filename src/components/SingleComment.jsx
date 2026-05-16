import { useState, useContext } from 'react';
import LikeCounter from '../features/LikeCounter';
import ReplyButton from '../utils/ReplyButton';
import EditCommentBTN from '../utils/EditCommentBTN';
import ReplyedMSGBox from './ReplyedMSGBox';
import EditReply from './EditReply';
import mutateReply from '../utils/mutateReply';
import { EditContext } from '../contexts/EditContext';
export default function SingleComment({ comment, currentUser }) {
  const { user, createdAt, content, score, id } = comment;
  const commentOwner = user.username === currentUser?.username;
  const [replyBack, setReplyBack] = useState({ state: false, uniqueID: '' });
  const [editCommentID, setEditCommentID] = useState(null);

  const { data, setData } = useContext(EditContext);

  function handleReplyMSG(formData) {
    const replyData = formData.get('commentText')?.toString().trim();
    if (!replyData) return;
    const replyedObjectData = {
      // id: JSON.stringify(new Date()),
      // Using crypto.randomUUID() for better and secure random ID
      id: crypto.randomUUID(),
      content: replyData,
      createdAt: new Date().toLocaleTimeString(),
      score: 0,
      replyingTo: user.username,
      user: {
        image: {
          png: data.currentUser.image.png,
        },
        username: data.currentUser.username,
      },
    };
    setData(prev => {
      const newComments = mutateReply(
        prev.comments,
        replyBack.uniqueID,
        replyedObjectData
      );
      return {
        ...prev,
        comments: newComments,
      };
    });
    setReplyBack({ state: false, uniqueID: '' });
  }
  if (id === editCommentID)
    return (
      <EditReply replyData={comment} setEditCommentID={setEditCommentID} />
    );
  return (
    <section className="single_Comment-Wrapper">
      <div className="single_Comment">
        <header className="comment__Header">
          <img src={user.image.png} alt={`${user.username} avatar`} />
          <h4>{user.username}</h4>
          <p>{createdAt}</p>
        </header>
        <article>{content}</article>
        <footer>
          <LikeCounter score={score} id={id} setData={setData} data={data} />
          {commentOwner ? (
            <EditCommentBTN setEditCommentID={setEditCommentID} id={id} />
          ) : (
            <ReplyButton setReplyBack={setReplyBack} id={id} />
          )}
        </footer>
      </div>
      {replyBack.state ? (
        <ReplyedMSGBox
          handleReplyMSG={handleReplyMSG}
          currentUser={currentUser}
        />
      ) : null}
    </section>
  );
}
