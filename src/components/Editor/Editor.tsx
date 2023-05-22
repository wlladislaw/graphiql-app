import Variables from '../Variables/Variables';
import './Editor.scss';
import PlayButton from '../../components/PlayButton/PlayButton';
function Editor() {
  return (
    <section className="editor_container">
      <textarea className="request-area">Try to write your query here</textarea>
      <Variables />
      <PlayButton />
    </section>
  );
}

export default Editor;
