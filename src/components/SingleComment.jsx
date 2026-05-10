
import LikeCounter from '../features/LikeCounter';
import ReplyButton from '../utils/ReplyButton';
import EditCommentBTN from '../utils/EditCommentBTN';
export default function SingleComment({
  img,
  username,
  createdAt,
  content,
  score,
  currentUser,
  id
}) {
  const commentOwner = Boolean(username === currentUser?.username);
  console.log(commentOwner);
  return (
    <div className="single_Comment">
      <header className="comment__Header">
        <img src={img} alt="" />
        <h4>{username}</h4>
        <p>{createdAt}</p>
      </header>
      <article>{content}</article>
      <footer>
        <LikeCounter score={score} />
        {commentOwner ? <EditCommentBTN id={id}/> : <ReplyButton />}
      </footer>
    </div>
  );
}
