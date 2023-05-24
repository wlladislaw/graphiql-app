import { useState } from 'react';
import './Schema.scss';
import { useTranslation } from 'react-i18next';

const Schema = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { t } = useTranslation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {!isExpanded ? (
        <button className="schema_btn" onClick={handleButtonClick}>
          {t('schema')}
        </button>
      ) : (
        <div className="schema_container">
          <input
            className="schema_input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={t('search_input')}
          />
          <div className="docs_container">
            <h2>{t('queries')}</h2>
            <p>{t('schema_message')}</p>
          </div>
          <button className="expanded_btn" onClick={handleButtonClick}>
            {t('schema')}
          </button>
        </div>
      )}
    </div>
  );
};

export default Schema;
