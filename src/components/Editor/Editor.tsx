import React from 'react';
import Variables from '../Variables/Variables';
import './Editor.scss';
import PlayButton from '../../components/PlayButton/PlayButton';
function Editor() {
  return (
    <section className="editor_container">
      <textarea></textarea>
      <Variables />
      <PlayButton />
    </section>
  );
}

export default Editor;
