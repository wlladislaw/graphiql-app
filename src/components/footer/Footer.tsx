import './Footer.scss';
import { LINKS_FOOTER } from './footer_links/FooterLinks';
import { FooterLogos } from './footer_logos/FooterLogos';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
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
