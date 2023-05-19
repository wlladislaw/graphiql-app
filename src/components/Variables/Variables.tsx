import { useState } from 'react';

const Variables = () => {
  const [showTextArea, setShowTextArea] = useState(true);
  return (
    <div>
      <div className="variables_container">variables section</div>
      {showTextArea && <textarea className="text-area"></textarea>}
    </div>
  );
};

export default Variables;
