import { useTranslation } from 'react-i18next';
import './QueryInput.scss';
function QueryInput() {
  const { t } = useTranslation();
  return (
    <div className="query_input-container">
      <input className="query_input" placeholder={t('api_placeholder')}></input>
    </div>
  );
}

export default QueryInput;
