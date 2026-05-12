import { useState } from 'react';
import { EditContext } from './contexts/EditContext';
import Comments from './components/Comments';
import info from '../src/data/data.json';
import SendMsg from './components/SendMsg';
export default function App() {
  const [data, setData] = useState(info);
  console.log(data);
  function deleteByID(comments, matchID) {
    return comments
      .filter(comment => comment.id !== matchID)
      .map(comment => {
        if (comment.replies) {
          return {
            ...comment,
            replies: deleteByID(comment.replies, matchID),
          };
        }
        return comment;
      });
  }
  function handleComment(info) {
    const deleteData = info.delete;
    const newData = { ...data };
    newData.comments = deleteByID(newData.comments, deleteData);
    setData(newData);
  }

  return (
    <EditContext.Provider value={{ handleComment, data, setData }}>
      <main className="mainApp">
        <Comments data={data} />
        <SendMsg
          user={data.currentUser.username}
          image={data.currentUser.image.png}
          data={data}
          setData={setData}
        />
      </main>
    </EditContext.Provider>
  );
}
