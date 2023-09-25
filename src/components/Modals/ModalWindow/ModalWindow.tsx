import './ModalWindow.scss';
import Modal from 'react-modal';
import React, { FC } from 'react';

export interface ModalProps {
  content: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const ModalWindow: FC<ModalProps> = ({ content, isOpen = false, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} className={'modal-container'} onRequestClose={onClose}>
        {content}
      </Modal>
    </div>
  );
};

export default ModalWindow;
