import React from 'react';

interface ModalFooterProps {
  children: React.ReactNode;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
  return <div className="flex justify-end space-x-2">{children}</div>;
};

export default ModalFooter;
