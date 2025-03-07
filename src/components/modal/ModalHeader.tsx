import React from 'react';
import { RxCross2 } from 'react-icons/rx';

interface ModalHeaderProps {
  title?: string;
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      {title && <h2 className="text-xl font-semibold">{title}</h2>}
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
        <RxCross2 className="text-3xl cursor-pointer" />
      </button>
    </div>
  );
};

export default ModalHeader;
