import './Response.scss';
import { useAppSelector } from '../../hooks/redux';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Response() {
  const { apiResponse } = useAppSelector((state) => state.responseReducer);
  const [_, setResValue] = useState('');
  const { t } = useTranslation();
  return (
    <aside className="response_container">
      <textarea
        onChange={(e) => setResValue(e.target.value)}
        className="text_container"
        value={apiResponse == 'Error' ? t('err_responce') : apiResponse}
        placeholder="Hit the Play Button to get a response here"
      ></textarea>
    </aside>
  );
}

export default Response;
