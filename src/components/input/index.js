import React, { useState } from 'react';

import './input.scss';

const Input = ({
  label, value, onChange, type, placeholder, errorMessage,
}) => {
  const [focus, setFocus] = useState(false);
  const errorMessageExistance = errorMessage && errorMessage.length > 0;

  return (
    <div className={`input ${focus ? 'focus' : ''}`}>
      <span>{label}</span>
      <div className="contentInputAndMessage">
        <input
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={errorMessageExistance ? 'danger' : ''}
        />
        <span className={errorMessageExistance ? 'visible' : ''}>
          {errorMessage || ''}
        </span>
      </div>
    </div>
  );
};

export default Input;
