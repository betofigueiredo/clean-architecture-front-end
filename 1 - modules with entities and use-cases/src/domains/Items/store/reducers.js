import items from './store';
import reducerUtil from '../../../utils/redux/reducerUtil';

// Use cases
import itemAdded from '../use_cases/itemAdded';

const funcs = {
	'[items] ITEM_ADDED': itemAdded,
};

const reducer = reducerUtil(items, funcs);
export default reducer;
