import Variables from '../Variables/Variables';
import './Editor.scss';
import PlayButton from '../../components/PlayButton/PlayButton';
import { useTranslation } from 'react-i18next';
function Editor() {
  const { t } = useTranslation();
  return (
    <section className="editor_container">
      <textarea className="request-area" placeholder={t('editor')}></textarea>
      <Variables />
      <PlayButton />
    </section>
  );
}

export default Editor;
