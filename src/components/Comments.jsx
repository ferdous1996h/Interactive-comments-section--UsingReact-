import { Fragment } from 'react';

import SingleComment from './SingleComment';
import ReplyThread from '../utils/ReplyThread';
export default function Comments({ data }) {
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
                <ReplyThread
                  replies={comment.replies}
                  currentUser={data.currentUser}
                />
              </Fragment>
            ))
          : null}
      </section>
    </>
  );
}
