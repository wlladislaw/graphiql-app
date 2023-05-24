import { useAppSelector } from '../../hooks/redux';
import './PlayButton.scss';
const mainButton = require('../../assets/mainButton.svg');

function PlayButton() {
  const { textAreaValue } = useAppSelector((state) => state.editorReducer);

  const handleGetResponse = async () => {
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
       ${textAreaValue}
      `,
        variables: {},
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log('IN BUTTON CLICK', result));
  };

  return (
    <button onClick={handleGetResponse}>
      <img className="main_button" src={mainButton} alt="main_btn" />
    </button>
  );
}

export default PlayButton;
