import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { responseSlice } from '../../redux/reducers/responseSlice';
import './PlayButton.scss';
const mainButton = require('../../assets/mainButton.svg');

function PlayButton() {
  const dispatch = useAppDispatch();
  const { textAreaValue } = useAppSelector((state) => state.editorReducer);

  const { queryInputValue } = useAppSelector((state) => state.queryReducer);

  const { changeAPIResponse } = responseSlice.actions;
  const { t } = useTranslation();
  // https://rickandmortyapi.com/graphql

  const handleGetResponse = async () => {
    fetch(`${queryInputValue}`, {
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
      .then((result) => dispatch(changeAPIResponse(JSON.stringify(result))))
      .catch(() => dispatch(changeAPIResponse('Error')));
  };

  return (
    <button onClick={handleGetResponse}>
      <img className="main_button" src={mainButton} alt="main_btn" />
    </button>
  );
}

export default PlayButton;
