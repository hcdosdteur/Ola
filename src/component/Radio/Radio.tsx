import React, { useContext } from 'react';
import { RadioContext } from './RadioContext';

export const Radio: React.FC<{
  value: number;
  name: string;
  onChange: () => void;
  defaultChecked?: boolean;
  children: string;
}> = ({ value, name, defaultChecked, onChange, children }) => {
  return (
    <label>
      <input
        type={'radio'}
        value={value}
        name={name}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      {children}
    </label>
  );
};
