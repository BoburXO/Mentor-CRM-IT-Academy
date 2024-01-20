import React, { useContext } from 'react';
import './toggle.scss';
import { ThemeContext } from '../../ThemeContext';
import { Switch } from 'antd';

const Toggle = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };

  return (
    <div className='t'>
      <Switch
        onChange={onChange}
        onClick={handleClick}
      />
    </div>
  );
};

export default Toggle;
