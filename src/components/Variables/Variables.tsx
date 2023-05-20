import { useState } from 'react';
import './variables.scss';

const Variables = () => {
  const [showTextArea, setShowTextArea] = useState(true);
  return (
    <div className="container">
      <div className="variables_container">variables section</div>
      {showTextArea && <textarea className="text-area"></textarea>}
    </div>
  );
};

export default Variables;
