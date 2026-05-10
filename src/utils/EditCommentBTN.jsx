import { useContext } from 'react';
import { EditContext } from '../contexts/EditContext';
export default function EditCommentBTN({ id }) {
  const { handleComment } = useContext(EditContext);
  return (
    <div className="EditCommentBTN">
      <button className="Delete" onClick={() => handleComment({ delete: id })}>
        <img src="/public/images/icon-delete.svg" alt="" />
        <p style={{ color: '#DC6D6D' }}>Delete</p>
      </button>
      <button className="edit" onClick={() => handleComment({ edit: id })}>
        <img src="/public/images/icon-edit.svg" alt="" />
        <p style={{ color: '#7C7AC0' }}>Edit</p>
      </button>
    </div>
  );
}
