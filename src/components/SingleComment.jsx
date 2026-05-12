import { useState } from 'react';
import LikeCounter from '../features/LikeCounter';
import ReplyButton from '../utils/ReplyButton';
import EditCommentBTN from '../utils/EditCommentBTN';
import ReplyedMSGBox from './ReplyedMSGBox';

import { useContext } from 'react';
import { EditContext } from '../contexts/EditContext';
export default function SingleComment({
  img,
  username,
  createdAt,
  content,
  score,
  currentUser,
  id,
}) {
  const commentOwner = Boolean(username === currentUser?.username);
  const [replyBack, setReplyBack] = useState({ state: false, uniqueID: '' });
  const { data, setData } = useContext(EditContext);

  function mutateReply(comments, targetID, updater) {
    for (const subComment of comments) {
      if (subComment.id === targetID) {
        if (subComment.replies) {
          console.log('sucsess');
          subComment.replies.push(updater);
        }
        if (!subComment.replies) {
          console.log('fail');
          subComment.replies = [];
          subComment.replies.push(updater);
        }
        console.log(subComment.replies);
        return true;
      }
      if (subComment.replies?.length) {
        const found = mutateReply(subComment.replies, targetID, updater);
        if (found) return true;
      }
    }
    return false;
  }

  function handleReplyMSG(formData) {
    const replyData = formData.get('commentText');
    console.log(replyData);
    if (!replyData) return;
    const replyDOBJ = {
      id: new Date(),
      content: replyData.toString().trim(),
      createdAt: new Date().toLocaleTimeString(),
      score: 0,
      replyingTo: username,
      user: {
        image: {
          png: data.currentUser.image.png,
        },
        username: data.currentUser.username,
      },
    };
    console.log(replyDOBJ);
    const newDATA = { ...data };
    mutateReply(newDATA.comments, replyBack.uniqueID, replyDOBJ);
    console.log(newDATA);
    setData(newDATA);
    replyBack.state = false;
  }
  return (
    <section className="single_Comment-Wrapper">
      <div className="single_Comment">
        <header className="comment__Header">
          <img src={img} alt="" />
          <h4>{username}</h4>
          <p>{createdAt}</p>
        </header>
        <article>{content}</article>
        <footer>
          <LikeCounter score={score} />
          {commentOwner ? (
            <EditCommentBTN id={id} />
          ) : (
            <ReplyButton setReplyBack={setReplyBack} id={id} />
          )}
        </footer>
      </div>
      {replyBack.state ? (
        <ReplyedMSGBox handleReplyMSG={handleReplyMSG} data={data} />
      ) : null}
    </section>
  );
}
