import { useTranslation } from 'react-i18next';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { Link } from 'react-router-dom';
import './ErrorPage.scss';

export const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <div className="error-page">
      <ErrorMessage />
      <Link className="error-page_link" to="/">
        {t('back')}
      </Link>
    </div>
  );
};
