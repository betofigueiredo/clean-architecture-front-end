export const itemAdded = ({ item }) => ({
	type: '[items] ITEM_ADDED',
	item,
});

export const itemQuantityChanged = ({ item_id, quantity }) => ({
	type: '[items] ITEM_QUANTITY_CHANGED',
	item_id,
	quantity,
});
