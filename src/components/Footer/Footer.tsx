import './Footer.scss';
import { useState } from 'react';
import { LINKS_FOOTER } from './footer_links/FooterLinks';
import { FooterLogos } from './footer_logos/FooterLogos';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();
  const onToggle = () => setToggle(!toggle);

  return (
    <footer className="footer">
      <div className="footer_left">
        {toggle ? (
          <Button
            variant="outline-dark"
            style={{
              width: '80px',
              fontSize: '14px',
            }}
            onClick={onToggle}
          >
            {t('close')}
          </Button>
        ) : (
          <Button
            variant="outline-dark"
            style={{
              width: '80px',
              fontSize: '14px',
            }}
            onClick={onToggle}
          >
            {t('authors')}
          </Button>
        )}

        <div
          className="container"
          style={toggle ? { display: 'flex' } : { display: 'none' }}
        >
          <div className="footer__links">
            <FooterLogos altClass="footer__logos" logos={LINKS_FOOTER} />
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>{t('designed')}</p>
      </div>
    </footer>
  );
};
