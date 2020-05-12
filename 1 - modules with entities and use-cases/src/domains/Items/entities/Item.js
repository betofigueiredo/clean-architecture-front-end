/* eslint-disable no-unused-vars */
const makeItem = ({
	id = null,
	name = '',
	quantity = 0,
	unity = '',
	price = 0,
	discount = 0,
	observations = '',
	properties = [],
	order_id,
	status,
	created_at,
	updated_at,
} = {}) => {
	const errors = [];

	if (!id) {
		// throw new Error('Item must have an id');
		errors.push('Item must have an id');
	}
	if (!name) {
		// throw new Error('Item must have a name');
		errors.push('Item must have a name');
	}
	if (!order_id) {
		// throw new Error('Item must belong to an order');
		errors.push('Item must belong to an order');
	}

	function emptyQuantity() {
		return quantity === 0;
	}

	function getPrice() {
		return (quantity * price) - discount;
	}

	function fullItem() {
		return {
			id,
			name,
			quantity,
			unity,
			price,
			discount,
			observations,
			properties,
			order_id,
			status,
			created_at,
			updated_at,
		};
	}

	return Object.freeze({
		getName: () => name,
		getUnity: () => unity,
		getPrice: () => getPrice(),
		emptyQuantity: () => emptyQuantity(),
		fullItem: () => fullItem(),
		hasErrors: () => errors.length > 0,
		errors: () => errors,
	});
};

export default makeItem;
