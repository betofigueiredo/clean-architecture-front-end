import makeItem from '../../entities';

const itemAdded = (state = {}, action = {}) => {
	const item_to_add = action.item || {};

	function addItemToState(item) {
		return {
			...state,
			item_on_edition: item.fullItem(),
		};
	}

	function checkErrors(item) {
		if (item.hasErrors()) {
			// TODO errors
			throw new Error('Item has errors');
		}
		return addItemToState(item);
	}

	function initItem() {
		const item = makeItem({ ...item_to_add });
		return checkErrors(item);
	}

	return initItem();
};

export default itemAdded;
