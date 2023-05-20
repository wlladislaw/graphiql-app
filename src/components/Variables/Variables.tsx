import { useState } from 'react';
import './variables.scss';

const Variables = () => {
  const [showTextArea, setShowTextArea] = useState(false);
  const [textBtn, setTextBtn] = useState('show variables');

  const handler = () => {
    setShowTextArea(!showTextArea);
    setTextBtn('hide variables');
  };

  return (
    <div className="container-var">
      <button onClick={handler} className="variables_container">
        {textBtn}
      </button>
      {showTextArea && <textarea className="text-area"></textarea>}
    </div>
  );
};

export default Variables;
