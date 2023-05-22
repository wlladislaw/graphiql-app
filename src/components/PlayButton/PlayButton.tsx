import { useAppSelector } from '../../hooks/redux';
import { useQuery, gql } from '@apollo/client';
import './PlayButton.scss';
const mainButton = require('../../assets/mainButton.svg');

function PlayButton() {
  const { textAreaValue } = useAppSelector((state) => state.editorReducer);
  console.log('textAreaValue: ', textAreaValue);
  const handleGetResponse = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, error, data } = useQuery(
      gql`
        ${textAreaValue}
      `
    );
    console.log('data:!!!!!!!!!!1 ', data);
  };

  return (
    <button onClick={handleGetResponse}>
      <img className="main_button" src={mainButton} alt="main_btn" />
    </button>
  );
}

export default PlayButton;
