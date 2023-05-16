import { NavLink } from 'react-router-dom';
import './Welcome.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useTranslation } from 'react-i18next';
const GrafQLLogo = require('../../assets/graphql.svg');

export const Welcome = () => {
  const [user] = useAuthState(auth);
  const { t } = useTranslation();
  return (
    <div className="welcome">
      <img src={GrafQLLogo} alt="GrafQLLogo" className="graph-logo" />
      <div className="link">
        {!user && (
          <>
            <NavLink to="/signIn" style={{ textDecoration: 'none' }}>
              <h1>{t('sing-in')}</h1>
            </NavLink>
            <NavLink to="/signUp" style={{ textDecoration: 'none' }}>
              <h1>{t('sing-up')}</h1>
            </NavLink>
          </>
        )}
        {user && (
          <NavLink to="/main" style={{ textDecoration: 'none' }}>
            <h1>{t('go-to-mainpage')}</h1>
          </NavLink>
        )}
      </div>
      <div className="text-container">
        <p>{t('description1')}</p>
        <p>{t('description2')}</p>
        <p>{t('description3')}</p>
      </div>
    </div>
  );
};
