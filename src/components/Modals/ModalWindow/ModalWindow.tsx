import './ModalWindow.scss';
import Modal from 'react-modal';
import React, { FC } from 'react';

export interface ModalProps {
  content: any;
  isOpen: boolean;
}

export const ModalWindow: FC<ModalProps> = ({ content, isOpen = false }) => {
  return (
    <div>
      <Modal isOpen={isOpen} className={'modal-container'}>
        {content}
      </Modal>
    </div>
  );
};

export default ModalWindow;
