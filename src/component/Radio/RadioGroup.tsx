import React from 'react';
import { RadioContext } from './RadioContext';

export const RadioGroup: React.FC<{
  children: React.ReactElement | React.ReactElement[];
  value: string;
}> = ({ children, value }) => {
  return (
    <fieldset>
      <RadioContext.Provider value={value}>{children}</RadioContext.Provider>
    </fieldset>
  );
};
