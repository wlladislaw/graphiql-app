import { useTranslation } from 'react-i18next';
import './Response.scss';
function Response() {
  const { t } = useTranslation();
  return <aside className="response_container">{t('response_message')}</aside>;
}

export default Response;
