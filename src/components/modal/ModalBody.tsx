import React from 'react';

interface ModalBodyProps {
  children: React.ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

export default ModalBody;
