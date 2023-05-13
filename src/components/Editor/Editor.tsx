import React from 'react';
import Variables from '../Variables/Variables';
import './Editor.scss';
function Editor() {
  return (
    <section className="editor_container">
      <textarea></textarea>
      <Variables />
    </section>
  );
}

export default Editor;
