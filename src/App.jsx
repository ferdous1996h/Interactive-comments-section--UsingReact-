import { useState, useRef, useEffect } from 'react';
import { EditContext } from './contexts/EditContext';
import Comments from './components/Comments';
import info from '../src/data/data.json';
import SendMsg from './components/SendMsg';
export default function App() {
  const pastData = JSON.parse(localStorage.getItem('chatHistory'));
  const connectedData = pastData ? pastData : info;
  const [data, setData] = useState(connectedData);
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(data));
  }, [data]);

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
  const secRef = useRef(null);
  function handleComment(info) {
    const deleteData = info.delete;
    if (deleteData) {
      const newData = { ...data };
      newData.comments = deleteByID(newData.comments, deleteData);
      setData(newData);
    }
  }
  useEffect(() => {
    secRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [data.comments.length]);
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
      <div className="lastScroll" ref={secRef}></div>
    </EditContext.Provider>
  );
}
