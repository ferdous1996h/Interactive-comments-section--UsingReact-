import { Fragment } from 'react';

import SingleComment from './SingleComment';

export default function Comments({ data }) {
  function deepReply(ele) {
    if (ele?.replies?.length) {
      return ele?.replies.map(ele => (
        <section className="replies" key={ele.id}>
          <SingleComment
            img={ele.user.image.png}
            username={ele.user.username}
            createdAt={ele.createdAt}
            content={ele.content}
            score={ele.score}
            currentUser={data.currentUser}
            id={ele.id}
          />
          {deepReply(ele)}
        </section>
      ));
    }
  }
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
            {deepReply(ele)}
          </Fragment>
        ))}
    </section>
  );
}
