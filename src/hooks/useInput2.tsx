import { ChangeEvent, useState } from 'react';

export const useInput2 = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const value = { task: e.target.value };
    const { value } = e.target;

    setValue(value);
  };

  return [value, onChange];
};
