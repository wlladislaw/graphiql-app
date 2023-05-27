import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../hooks/redux';
import { apiInputSlice } from '../../redux/reducers/apiInputSlice';
import './QueryInput.scss';
function QueryInput() {
  const dispatch = useAppDispatch();
  const { changeAPIInput } = apiInputSlice.actions;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeAPIInput(e.currentTarget.value));
  };
  const { t } = useTranslation();
  return (
    <div className="query_input-container">
      <input
        className="query_input"
        placeholder={t('api_placeholder')}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default QueryInput;
