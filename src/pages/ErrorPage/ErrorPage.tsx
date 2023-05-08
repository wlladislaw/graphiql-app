import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className="error-page">
      <ErrorMessage />
      <Link className="error-page_link" to="/">
        Back to home
      </Link>
    </div>
  );
};
