import items from './store';
import reducerUtil from '../../../utils/redux/reducerUtil';

// Use cases
import itemAdded from '../use_cases/itemAdded';
import itemQuantityChanged from '../use_cases/itemQuantityChanged';

const funcs = {
	'[items] ITEM_ADDED': itemAdded,
	'[items] ITEM_QUANTITY_CHANGED': itemQuantityChanged,
};

const reducer = reducerUtil(items, funcs);
export default reducer;
