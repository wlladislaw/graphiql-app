import { useState } from 'react';
import './variables.scss';

const Variables = () => {
  const [showTextArea, setShowTextArea] = useState(false);

  const handler = () => {
    setShowTextArea(!showTextArea);
  };

  return (
    <div className="container-var">
      <button onClick={handler} className="variables_container">
        {showTextArea ? 'Hide variables' : 'Show variables'}
      </button>
      {showTextArea && <textarea className="text-area"></textarea>}
    </div>
  );
};

export default Variables;
