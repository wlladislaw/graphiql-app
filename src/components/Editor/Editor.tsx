import Variables from '../Variables/Variables';
import './Editor.scss';
import PlayButton from '../../components/PlayButton/PlayButton';
import { useState } from 'react';
function Editor() {
  const [input, setInput] = useState('');
  console.log('input: ', input);
  const handleChange = (e) => {
    setInput(e.target.value);
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
