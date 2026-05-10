import { useState } from 'react';
import { EditContext } from './contexts/EditContext';
import Comments from './components/Comments';
import info from '../src/data/data.json';
export default function App() {
  const [data, setData] = useState(info);
  console.log(data);
  function handleComment(info) {
    const deleteData = info.delete;
    const newData = { ...data };
    const commentMatch = newData.comments.find(ele => ele.id === deleteData);
    console.log(commentMatch);
    const replyMatch = (newData?.comments.find(ele =>
      ele?.replies.find(ele => ele?.id === deleteData)
    ));
    console.log(replyMatch)
    if (replyMatch) {
      const mutateReply = replyMatch.replies.filter(
        ele => ele.id !== deleteData
      );
      replyMatch.replies = mutateReply;
      setData(newData);
    } else if (commentMatch) {
      const mutateComment = newData.comments.filter(
        ele => ele.id !== deleteData
      );
      newData.comments = mutateComment;
      console.log(mutateComment);
    }
  }
  return (
    <EditContext.Provider value={{ handleComment }}>
      <main className="mainApp">
        <Comments data={data} />
      </main>
    </EditContext.Provider>
  );
}
