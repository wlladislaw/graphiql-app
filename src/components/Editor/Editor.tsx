import Variables from '../Variables/Variables';
import './Editor.scss';
function Editor() {
  return (
    <section className="editor_container">
      <textarea className="request-area">Try to write your query here</textarea>
      <Variables />
    </section>
  );
}

export default Editor;
