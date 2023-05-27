import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { responseSlice } from '../../redux/reducers/responseSlice';
import './PlayButton.scss';
const mainButton = require('../../assets/mainButton.svg');

function PlayButton() {
  const dispatch = useAppDispatch();
  const { textAreaValue } = useAppSelector((state) => state.editorReducer);

  const { changeAPIResponse } = responseSlice.actions;
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
      .then((result) => {
        dispatch(changeAPIResponse(JSON.stringify(result, null, 4)));
      });
  };

  return (
    <button onClick={handleGetResponse}>
      <img className="main_button" src={mainButton} alt="main_btn" />
    </button>
  );
}

export default PlayButton;
