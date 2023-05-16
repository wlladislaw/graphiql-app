import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './Header.scss';
const graphLogo = require('../../assets/GraphQL_Logo.svg.png');
import { logout, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// import { useEffect, useState } from 'react';

export function Header() {
  // const [sticky, setSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setSticky(window.scrollY > 200);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // });
  // className={`${sticky ? 'sticky' : ''}`}
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
