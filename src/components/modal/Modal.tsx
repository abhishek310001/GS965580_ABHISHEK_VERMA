import React from 'react';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 z-99999 flex h-screen w-full justify-center overflow-y-scroll bg-black/80">
      <div className="relative m-auto w-full max-w-180 rounded-sm border border-stroke bg-white p-4 shadow-default sm:p-8 xl:p-10">
        {children}
      </div>
    </div>
  );
};

export default Modal;
