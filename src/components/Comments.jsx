import { Fragment } from 'react';

import SingleComment from './SingleComment';

export default function Comments({ data }) {
  function deepReply(comment) {
    if (comment?.replies?.length) {
      return comment?.replies.map(reply => (
        <section className="replies" key={reply.id}>
          <SingleComment
            img={reply.user.image.png}
            username={reply.user.username}
            createdAt={reply.createdAt}
            content={reply.content}
            score={reply.score}
            currentUser={data.currentUser}
            id={reply.id}
          />
          {deepReply(reply)}
        </section>
      ));
    } else return null;
  }
  return (
    <>
      <section className="main_Comments">
        {data?.comments
          ? data?.comments.map(comment => (
              <Fragment key={comment.id}>
                <SingleComment
                  img={comment.user.image.png}
                  username={comment.user.username}
                  createdAt={comment.createdAt}
                  content={comment.content}
                  score={comment.score}
                  currentUser={data.currentUser}
                  id={comment.id}
                />
                {deepReply(comment)}
              </Fragment>
            ))
          : null}
      </section>
    </>
  );
}
