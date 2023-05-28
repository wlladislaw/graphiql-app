import './Response.scss';
import { useAppSelector } from '../../hooks/redux';
import { useTranslation } from 'react-i18next';

function Response() {
  const { apiResponse } = useAppSelector((state) => state.responseReducer);
  const { t } = useTranslation();
  return (
    <aside className="response_container">
      <textarea
        className="text_container"
        value={apiResponse == 'Error' ? t('err_responce') : apiResponse}
        placeholder="Hit the Play Button to get a response here"
      ></textarea>
    </aside>
  );
}

export default Response;
