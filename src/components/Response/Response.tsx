import { useTranslation } from 'react-i18next';
import './Response.scss';
import { useAppSelector } from '../../hooks/redux';

function Response() {
  const { apiResponse } = useAppSelector((state) => state.responseReducer);
  return (
    <aside className="response_container">
      <textarea
        className="text_container"
        value={apiResponse}
        placeholder="Hit the Play Button to get a response here"
      ></textarea>
    </aside>
  );
}

export default Response;
