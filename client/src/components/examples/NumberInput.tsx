import { useState } from 'react';
import NumberInput from '../NumberInput';

export default function NumberInputExample() {
  const [value, setValue] = useState('42');

  return (
    <div className="p-8">
      <NumberInput 
        label="첫 번째 숫자"
        value={value}
        onChange={setValue}
        testId="input-number-1"
      />
    </div>
  );
}
