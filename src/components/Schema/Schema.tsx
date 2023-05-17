import React, { useState } from 'react';
import './Schema.scss';

const Schema = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {!isExpanded ? (
        <button className="schema_btn" onClick={handleButtonClick}>
          Schema
        </button>
      ) : (
        <div className="schema_container">
          <input
            className="schema_input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="expanded_btn" onClick={handleButtonClick}>
            Schema
          </button>
        </div>
      )}
    </div>
  );
};

export default Schema;
