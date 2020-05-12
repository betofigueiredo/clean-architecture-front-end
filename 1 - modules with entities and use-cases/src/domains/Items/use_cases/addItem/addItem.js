import Item from '../../entities';

const addItem = (state = {}, action = {}) => {
	const item_to_add = action.item_to_add || {};

	function addItemToState(item) {
		return {
			...state,
			items: [
				...state.items,
				item,
			],
		};
	}

	function initItem() {
		const item = Item({
			id: item_to_add.id,
			name: item_to_add.name,
		});
		return addItemToState(item);
	}

	return initItem();
};

export default addItem;
