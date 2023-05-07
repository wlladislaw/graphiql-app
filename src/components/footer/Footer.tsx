import './Footer.scss';
import { useState } from 'react';
import { LINKS_FOOTER } from './footer_links/FooterLinks';
import { FooterLogos } from './footer_logos/FooterLogos';
import Button from 'react-bootstrap/Button';

export const Footer = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle(!toggle);

  return (
    <footer className="footer">
      <Button variant="secondary" size="sm" onClick={onToggle}>
        {toggle ? 'Close links' : 'Open links'}
      </Button>
      <div
        className="container"
        style={toggle ? { display: 'flex' } : { display: 'none' }}
      >
        <div className="footer__links">
          <FooterLogos altClass="footer__logos" logos={LINKS_FOOTER} />
        </div>
      </div>
      <div>
        <p className="footer__copyright">Designed in 2023</p>
      </div>
    </footer>
  );
};
