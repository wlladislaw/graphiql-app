import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { queryInputSlice } from '../../redux/reducers/queryInputSlice';
import './QueryInput.scss';
function QueryInput() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { queryInputValue } = useAppSelector((state) => state.queryReducer);
  const { changeQueryInputValue } = queryInputSlice.actions;

  return (
    <div className="query_input-container">
      <input
        className="query_input"
        placeholder={t('api_placeholder')}
        value={queryInputValue}
        onChange={(e) => dispatch(changeQueryInputValue(e.target.value))}
      ></input>
    </div>
  );
}

export default QueryInput;
