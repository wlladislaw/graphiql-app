import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
const graphLogo = require('../../assets/GraphQL_Logo.svg.png');
import { logout, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
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
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignOut = () => {
    logout();
    navigate('/');
  };
  return (
    <header>
      <nav className="nav_inner">
        <Link to="/">
          <img src={graphLogo} alt="graphLogo" width={35} height={35} />
        </Link>
        <div className="links">
          <Link className="links_item" to="/">
            Welcome
          </Link>
          <Link className="links_item" to="/about">
            About
          </Link>
          {user && (
            <button className="signOut_btn" onClick={handleSignOut}>
              Sign Out
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
