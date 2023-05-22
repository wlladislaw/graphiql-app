import { useState } from 'react';
import './variables.scss';

const Variables = () => {

  const [showTextAreaQuery, setShowTextAreaQuery] = useState(false);
  const [showTextAreaHttp, setShowTextAreaHttp] = useState(false);
  const [classQuery, setClassQuery] = useState('variables_container-1');
  const [classHttp, setClassHttp] = useState('variables_container-1');

  const handlerQuery = () => {
    setShowTextAreaQuery(true);
    setShowTextAreaHttp(false);
    setClassQuery('variables_container-2');
    setClassHttp('variables_container-1');
  };

  const handlerHttp = () => {
    setShowTextAreaHttp(true);
    setShowTextAreaQuery(false);
    setClassQuery('variables_container-1');
    setClassHttp('variables_container-2');
  };

  const handlerHide = () => {
    setShowTextAreaHttp(false);
    setShowTextAreaQuery(false);
    setClassQuery('variables_container-1');
    setClassHttp('variables_container-1');

  };

  return (
    <div className="container-var">
      <button onClick={handlerHide} className="btn-hide"></button>
      <div>
        <button onClick={handlerQuery} className={classQuery}>
          QUERY VARIABLES
        </button>
        <button onClick={handlerHttp} className={classHttp}>
          HTTP HEADERS
        </button>
      </div>
      {showTextAreaQuery && <textarea className="text-area"></textarea>}
      {showTextAreaHttp && <textarea className="text-area"></textarea>}

    </div>
  );
};

export default Variables;
