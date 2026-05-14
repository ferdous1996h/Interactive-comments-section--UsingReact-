import { useContext, useState } from 'react';

import { EditContext } from '../contexts/EditContext';
import ModalDelete from '../components/ModalDelete';
export default function EditCommentBTN({ id, setEditCommentID }) {
  const { handleComment } = useContext(EditContext);
  const [modalOn, setModalOn] = useState(false);
  function revertModal(){
    setModalOn(false)
  }
  return (
    <div className="EditCommentBTN">
      <button className="Delete" onClick={() => setModalOn(true)}>
        <img src="/public/images/icon-delete.svg" alt="" />
        <p style={{ color: '#DC6D6D' }}>Delete</p>
      </button>
      <button className="edit" onClick={() => setEditCommentID(id)}>
        <img src="/public/images/icon-edit.svg" alt="" />
        <p style={{ color: '#7C7AC0' }}>Edit</p>
      </button>
      {modalOn ? (
        <ModalDelete
          id={id}
          handleComment={handleComment}
          revertModal={revertModal}
        />
      ) : null}
    </div>
  );
}
