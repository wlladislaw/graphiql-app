import { useState } from 'react';
import './Schema.scss';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../hooks/redux';

interface SchemaType {
  name: string;
  __typename: string;
}
interface Schema {
  types: SchemaType[];
}

const Schema = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const [schema, setSchema] = useState<Schema | null>(null);

  const { queryInputValue } = useAppSelector((state) => state.queryReducer);
  const { t } = useTranslation();

  const fetchSchema = async () => {
    try {
      const response = await fetch(`${queryInputValue}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: '{ __schema { types { name } } }' }),
      });

      const result = await response.json();
      const introspectionData = result.data.__schema;
      console.log('introspectionData: ', introspectionData);

      setSchema(introspectionData);
    } catch (error) {
      setError(true);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
    fetchSchema();
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
            {!schema && <p>{t('schema_message')}</p>}
            <button
              className="expanded_btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {t('schema')}
            </button>
            <ul>
              {error
                ? t('err_responce')
                : schema?.types.map((type: SchemaType) => (
                    <li key={type.name}>{type.name}</li>
                  ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schema;
