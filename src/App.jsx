import { useState, useRef, useEffect } from 'react';
import { EditContext } from './contexts/EditContext';
import Comments from './components/Comments';
import info from '../src/data/data.json';
import SendMsg from './components/SendMsg';
import { deleteByID } from './utils/deleteByID';
export default function App() {
  const grabPastDATA = JSON.parse(localStorage.getItem('chatHistory'));
  const connectedDATA = grabPastDATA ? grabPastDATA : info;
  const [data, setData] = useState(connectedDATA);
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(data));
  }, [data]);

  const secRef = useRef(null);
  function handleComment(info) {
    const deleteData = info.delete;
    if (!deleteData) return;
    // ## If new value depend on previous value or state always use functional update
    setData(prev => {
      const newComment = deleteByID(data.comments, deleteData);
      return {
        ...prev,
        comments: newComment,
      };
    });
  }
  // useEffect(() => {
  //   secRef.current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'end',
  //   });
  // }, [data.comments.length]);

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
