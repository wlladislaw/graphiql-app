import Variables from '../Variables/Variables';
import './Editor.scss';
import PlayButton from '../../components/PlayButton/PlayButton';
import { useAppDispatch } from '../../hooks/redux';
import { editorSlice } from '../../redux/reducers/editorSlice';
import { useTranslation } from 'react-i18next';

function Editor() {
  const dispatch = useAppDispatch();
  const { changeEditorTextArea } = editorSlice.actions;
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeEditorTextArea(e.target.value));
  };
  const { t } = useTranslation();
  return (
    <section className="editor_container">
      <textarea
        className="request-area"
        placeholder={t('editor')}
        onChange={handleChange}></textarea>
      <Variables />
      <PlayButton />
    </section>
  );
}

export default Editor;
