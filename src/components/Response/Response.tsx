import './Response.scss';
import { useAppSelector } from '../../hooks/redux';
import { useTranslation } from 'react-i18next';

function Response() {
  const { apiResponse } = useAppSelector((state) => state.responseReducer);
  const { t } = useTranslation();
  return (
    <aside className="response_container">
      {apiResponse == 'Error' ? t('err_responce') : apiResponse}
    </aside>
  );
}

export default Response;
