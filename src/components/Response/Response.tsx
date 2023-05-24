import { useTranslation } from 'react-i18next';
import './Response.scss';
import { useAppSelector } from '../../hooks/redux';

function Response() {
  const { apiResponse } = useAppSelector((state) => state.responseReducer);
  //const { t } = useTranslation();
  return <aside className="response_container">{apiResponse}</aside>;
}

export default Response;
