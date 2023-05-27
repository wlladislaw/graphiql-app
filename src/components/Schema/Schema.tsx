import { useState } from 'react';
import './Schema.scss';
import { useTranslation } from 'react-i18next';

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
  const [schema, setSchema] = useState<Schema | null>(null);

  const { t } = useTranslation();

  const fetchSchema = async () => {
    const response = await fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: '{ __schema { types { name } } }' }),
    });

    const result = await response.json();

    if (result.errors) {
      console.error('Failed to fetch schema:', result.errors);
      return;
    }
    const introspectionData = result.data.__schema;
    console.log('introspectionData: ', introspectionData);

    setSchema(introspectionData);
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
              {schema?.types.map((type: SchemaType) => (
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
