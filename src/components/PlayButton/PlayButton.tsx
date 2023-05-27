import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { responseSlice } from '../../redux/reducers/responseSlice';
import MainButton from './MainButton';
import './PlayButton.scss';

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
      .then((result) => {
        dispatch(changeAPIResponse(JSON.stringify(result, null, 4)));
      })
      .catch(() => dispatch(changeAPIResponse('Error')));
  };

  return <MainButton onClick={handleGetResponse} />;
}

export default PlayButton;
