import { Link, useNavigate } from 'react-router-dom';
import { logout, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
const graphLogo = require('../../assets/GraphQL_Logo.svg.png');
import './Header.scss';

export function Header() {
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  const changeLanguage = (language: string) => {
    setToggle(!toggle);
    i18n.changeLanguage(language);
  };
  return (
    <header>
      <nav className="nav_inner">
        <Link to="/">
          <img src={graphLogo} alt="graphLogo" width={35} height={35} />
        </Link>
        <div className="links">
          <Link className="links_item" to="/">
            {t('welcome')}
          </Link>
          <Link className="links_item" to="/about">
            {t('about')}
          </Link>
          {user && (
            <button className="signOut_btn" onClick={handleSignOut}>
              {t('sing-out')}
            </button>
          )}
          {toggle ? (
            <button
              onClick={() => changeLanguage('en')}
              className="language_button"
            >
              EN
            </button>
          ) : (
            <button
              onClick={() => changeLanguage('ru')}
              className="language_button"
            >
              RU
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
