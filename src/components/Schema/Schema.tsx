import { useState } from 'react';
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
            placeholder="Search the schema..."
          />
          <div className="docs_container">
            <h2>Queries</h2>
            <p>No GraphQL schema available</p>
          </div>
          <button className="expanded_btn" onClick={handleButtonClick}>
            Schema
          </button>
        </div>
      )}
    </div>
  );
};

export default Schema;
