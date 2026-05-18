import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
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

  {
    /*useCallback prevent unnecessary creation of function in each render & memoize the function work  .And dependency change create again this function. Also using empty dependency as this function is not depend on data ,result or anyState*/
  }
  const handleComment = useCallback(commentAction => {
    const deleteData = commentAction.delete;
    if (!deleteData) return;
    // ## If new value depend on previous value or state always use functional update
    setData(prev => {
      const newComment = deleteByID(prev.comments, deleteData);
      return {
        ...prev,
        comments: newComment,
      };
    });
  }, []);
  useEffect(() => {
    secRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [data.comments.length]);

  {
    /*Using useMemo so that in every render context provider doesn't provide new object , which causes consumers to rerender also */
  }
  const editContext = useMemo(
    () => ({ handleComment, data, setData }),
    [handleComment, data]
  );
  return (
    <EditContext value={editContext}>
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
    </EditContext>
  );
}
