import { Fragment } from 'react';

import SingleComment from './SingleComment';

export default function Comments({ data }) {
  return (
    <section className="main_Comments">
      {data?.comments &&
        data?.comments.map(ele => (
          <Fragment key={ele.id}>
            <SingleComment
              img={ele.user.image.png}
              username={ele.user.username}
              createdAt={ele.createdAt}
              content={ele.content}
              score={ele.score}
              currentUser={data.currentUser}
              id={ele.id}
            />

            <section className="replies">
              {ele?.replies &&
              ele?.replies.map(ele => (
                <SingleComment
                  key={ele.id}
                  img={ele.user.image.png}
                  username={ele.user.username}
                  createdAt={ele.createdAt}
                  content={ele.content}
                  score={ele.score}
                  currentUser={data.currentUser}
                  id={ele.id}
                />
              ))}
            </section>
          </Fragment>
        ))}
    </section>
  );
}
