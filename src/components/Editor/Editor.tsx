import Variables from '../Variables/Variables';
import './Editor.scss';
import PlayButton from '../../components/PlayButton/PlayButton';
import { useAppDispatch } from '../../hooks/redux';
import { editorSlice } from '../../redux/reducers/editorSlice';

function Editor() {
  const dispatch = useAppDispatch();
  const { changeEditorTextArea } = editorSlice.actions;
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeEditorTextArea(e.target.value));
  };
  return (
    <section className="editor_container">
      <textarea className="request-area" onChange={handleChange}>
        Try to write your query here
      </textarea>
      <Variables />
      <PlayButton />
    </section>
  );
}

export default Editor;
