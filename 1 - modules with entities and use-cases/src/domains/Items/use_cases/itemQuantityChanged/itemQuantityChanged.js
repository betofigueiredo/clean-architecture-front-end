const itemQuantityChanged = (state = {}, action = {}) => {
	// const item_id = action.item_id || 0;

	function updateState(quantity) {
		return {
			...state,
			item_on_edition: {
				...state.item_on_edition,
				quantity,
			},
		};
	}

	function setStringToNumber() {
		const quantity = parseFloat(action.quantity || 0);
		return updateState(quantity);
	}

	return setStringToNumber();
};

export default itemQuantityChanged;
