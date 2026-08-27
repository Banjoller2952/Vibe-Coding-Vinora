import React from 'react';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  itemTitle: string;
  itemType?: string;
  onClose: () => void;
  onConfirmDelete: () => void;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  itemTitle,
  itemType = 'category',
  onClose,
  onConfirmDelete,
}) => {
  if (!isOpen) return null;

  return (
    <div className="delete-confirm-overlay" onClick={onClose}>
      <div className="delete-confirm-card" onClick={(e) => e.stopPropagation()}>
        <h3 className="delete-confirm-title">Delete "{itemTitle}"?</h3>
        <p className="delete-confirm-subtitle">
          This removes the {itemType} from your list. You'll get an undo option straight after, just in case.
        </p>

        <div className="delete-confirm-actions">
          <button type="button" className="btn-confirm-keep" onClick={onClose}>
            Keep it
          </button>
          <button type="button" className="btn-confirm-delete" onClick={onConfirmDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
