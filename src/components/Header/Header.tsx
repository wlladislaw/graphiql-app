import { Link } from 'react-router-dom';
import './Header.scss';
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
  return (
    <header>
      <nav className="nav-inner">
        <span className="logo">Logo</span>
        <div className="links">
          <Link className="links-item" to="/">
            Home
          </Link>
          <Link className="links-item" to="/about">
            About
          </Link>
          <Link className="links-item" to="/#">
            Signout
          </Link>
        </div>
      </nav>
    </header>
  );
}
