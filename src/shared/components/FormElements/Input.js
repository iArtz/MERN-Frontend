import React from 'react';

import './Input.css';

const Input = ({
  id, label, placeholder, element, type, rows,
}) => {
  const ele = element === 'input' ? (
    <input id={id} type={type} placeholder={placeholder} />
  ) : (
    <textarea id={id} rows={rows || 3} />
  );
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      {ele}
    </div>
  );
};

export default Input;
