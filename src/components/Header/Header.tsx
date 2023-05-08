import { Link } from 'react-router-dom';
import './Header.scss';
import { logout } from '../../firebase';
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

  const handleSignOut = () => {
    console.log('CLICK!');

    logout();
  };
  return (
    <header>
      <nav className="nav_inner">
        <span className="logo">Logo</span>
        <div className="links">
          <Link className="links_item" to="/">
            Welcome
          </Link>
          <Link className="links_item" to="/about">
            About
          </Link>
          <button className="signOut_btn" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </nav>
    </header>
  );
}
