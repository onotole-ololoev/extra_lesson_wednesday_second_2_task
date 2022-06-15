import React, {FC, useCallback, useState} from 'react';

const FIRST_BUTTON_BACKGROUND = {background: 'tomato'};
const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};
const BUTTON_STYLES = {border: 'none', outline: 'none', color: 'white', borderRadius: 5};

type PropsType = { isChecked: boolean, onSetIsChecked: () => void };

// Task
// If click to Button component Checkbox not re-render // task 1
// If click to Checkbox component Button not re-render // task 2

export const Example_3 = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handleSetIsChecked = useCallback(() => setIsChecked(!isChecked), []) // useCallback is task 1 solution

  const handlePlusCountValueClick = useCallback(() => setFirstCount(prevFirstCount => prevFirstCount + 1), []); // useCallback is task 2 solution

  return (
    <div style={{...CONTAINER_STYLES} as any}>
      <div>{`Count equal: ${firstCount}`}</div>
      <Button onPlusCountValueClick={handlePlusCountValueClick} />
      <Checkbox isChecked={isChecked} onSetIsChecked={handleSetIsChecked} />
    </div>
  );
};

export const Button: React.FC<{ onPlusCountValueClick: () => void }> = React.memo(({onPlusCountValueClick}) => {
    console.log('re-render Button')
  return (
    <div>
      <button
        style={{...FIRST_BUTTON_BACKGROUND, ...BUTTON_STYLES}}
        onClick={onPlusCountValueClick}
      >
        Plus first counter
      </button>
    </div>
  );
});

export const Checkbox: React.FC<PropsType> = React.memo(({isChecked, onSetIsChecked}) => {
    console.log('re-render Checkbox')
  return (
    <input type="checkbox" checked={isChecked} onChange={onSetIsChecked} />
  );
}); // React.memo is task 1 solution