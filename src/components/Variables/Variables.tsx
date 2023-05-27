import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './variables.scss';

const Variables = () => {
  const [showTextAreaQuery, setShowTextAreaQuery] = useState(false);
  const [showTextAreaHttp, setShowTextAreaHttp] = useState(false);
  const [classQuery, setClassQuery] = useState('variables_container-1');
  const [classHttp, setClassHttp] = useState('variables_container-1');
  const { t } = useTranslation();

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
          {t('query_variables')}
        </button>
        <button onClick={handlerHttp} className={classHttp}>
          {t('http_variables')}
        </button>
      </div>
      {showTextAreaQuery && <textarea className="text-area"></textarea>}
      {showTextAreaHttp && <textarea className="text-area"></textarea>}
    </div>
  );
};

export default Variables;
