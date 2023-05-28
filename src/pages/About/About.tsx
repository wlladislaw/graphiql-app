import { useTranslation } from 'react-i18next';
import './About.scss';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about_text">
      <p>{t('about_description')}</p>
    </div>
  );
};

export default About;
