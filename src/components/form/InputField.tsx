import React from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, name, type = 'text', required = false, defaultValue = '' }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="mt-1 px-2 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        required={required}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputField;
