import items from './store';
import reducerUtil from '../../../utils/redux/reducerUtil';

// Use cases
import addItem from '../use_cases/addItem';

const funcs = {
	'[items] ADD_ITEM': addItem,
};

const reducer = reducerUtil(items, funcs);
export default reducer;
