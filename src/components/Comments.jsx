import { Fragment } from 'react';

import SingleComment from './SingleComment';
import ReplyThread from '../utils/ReplyThread';
export default function Comments({ data }) {
  return (
    <>
      <section className="main_Comments">
        {data?.comments?.length > 0 &&
          data?.comments?.map(comment => (
          <Fragment key={comment.id}>
            <SingleComment comment={comment} currentUser={data.currentUser} />
            <ReplyThread
              replies={comment.replies}
              currentUser={data.currentUser}
            />
          </Fragment>
        ))}

      </section>
    </>
  );
}
