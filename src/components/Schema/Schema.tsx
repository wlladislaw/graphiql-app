import { useState } from 'react';
import './Schema.scss';
import { useTranslation } from 'react-i18next';
import { buildClientSchema, getIntrospectionQuery } from 'graphql';
import { parse } from 'graphql/language';

const Schema = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [schema, setSchema] = useState(null);

  const { t } = useTranslation();

  const fetchSchema = async () => {
    const response = await fetch('https://rickandmortyapi.com/graphql', {
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
    // const clientSchema = buildClientSchema(introspectionData);
    // console.log('clientSchema: ', clientSchema);

    //setSchema(clientSchema);
  };

  const handleParseQuery = (query) => {
    try {
      const parsedQuery = parse(query);
      console.log('parsedQuery: ', parsedQuery);

      // Дополнительная обработка или отображение распарсенного запроса
    } catch (error) {
      console.error('Failed to parse query:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
    fetchSchema();
    handleParseQuery(`
    query charactersQuery {
      characters {
        results {
          name
        }
      }
    }
  `);
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
