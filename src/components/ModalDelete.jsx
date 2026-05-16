import { createPortal } from 'react-dom';

export default function ModalDelete({ id, handleComment, revertModal }) {
  const portalRoot = document.querySelector('.portal_Root');
  if (!portalRoot) return null;
  return createPortal(
    <section className="modalWrapper" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal_top">
          <h2>Delete comment</h2>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
        </div>
        <div className="modalBottom">
          <button className="cancelDelete" onClick={revertModal}>
            No, cancel
          </button>
          <button
            className="confirmdelete"
            onClick={() => handleComment({ delete: id })}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </section>,
    document.querySelector('.portal_Root')
  );
}
