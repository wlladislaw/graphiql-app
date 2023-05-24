import './Response.scss';
import { useAppSelector } from '../../hooks/redux';

function Response() {
  const { apiResponse } = useAppSelector((state) => state.responseReducer);
  console.log('apiResponse: ', apiResponse);
  return <aside className="response_container">{apiResponse}</aside>;
}

export default Response;
